// Function to check if site is a Substack site
function isSubstackSite() {
    return (
        // Check domain
        window.location.hostname.includes('substack.com') ||
        // Check for Substack-specific meta tags
        document.querySelector('link[href*="substackcdn.com"]') !== null
    );
}

// Function to check if content is free
function isFreeContent() {
    // Wait for article content to be fully loaded
    const article = document.querySelector('article');
    if (!article) {
        return true; // If no article found yet, assume free to avoid false positives
    }

    // Check for explicit paywall elements
    const paywallElements = [
        'div[data-testid="paywall"]',
        'div.paywall-cta',
        'div[class*="paywall"]',
        // Look for paywall title but exclude article titles that might contain "paywall"
        'h2.paywall-title:not(article h2)',
        'h2[class*="paywall-title"]:not(article h2)'
    ];

    const hasPaywallElement = paywallElements.some(selector => 
        document.querySelector(selector) !== null
    );

    if (hasPaywallElement) {
        return false;
    }

    // Check article content for paywall indicators
    const articleText = article.textContent.toLowerCase();
    
    // Common paywall phrases
    const paywallPhrases = [
        'this post is for paying subscribers',
        'this post is only available to paying subscribers',
        'subscribe to read',
        'subscribe to continue reading',
        'for full access'
    ];

    // Check if any paywall phrases are found in the article
    const hasPaywallText = paywallPhrases.some(phrase => 
        articleText.includes(phrase)
    );

    if (hasPaywallText) {
        return false;
    }

    // Check if we can see substantial article content
    // Free articles typically have multiple paragraphs visible
    const paragraphs = article.querySelectorAll('p');
    if (paragraphs.length < 2) {
        return false; // If we can't see multiple paragraphs, it might be paywalled
    }

    // Check for free content indicators
    const freeIndicators = [
        // Meta tag explicitly marking free content
        () => {
            const audienceMetaTag = document.querySelector('meta[property="article:content_tier"]');
            return audienceMetaTag && audienceMetaTag.content === 'free';
        },
        // Check if we can see comment section (usually visible for free posts)
        () => document.querySelector('.comments-section') !== null,
        // Check if we can see substantial article content
        () => {
            const articleContent = article.textContent.trim();
            return articleContent.length > 500; // Free articles usually have substantial visible content
        }
    ];

    // If any free indicators are present, consider it free content
    return freeIndicators.some(check => check());
}

// Function to create and insert warning banner
function insertWarningBanner() {
    // Don't add banner if it already exists
    if (document.querySelector('.substack-paywall-warning')) {
        return;
    }

    // Create banner element
    const banner = document.createElement('div');
    banner.className = 'substack-paywall-warning';
    banner.innerHTML = `
        <div class="warning-content">
            <span class="warning-icon">🔒</span>
            <span class="warning-text">This post requires a paid subscription</span>
        </div>
    `;

    // Insert at the top of the article
    const article = document.querySelector('article') || 
                   document.querySelector('.post') || 
                   document.querySelector('.main') || 
                   document.body;
    article.insertBefore(banner, article.firstChild);
}

// Main function
function checkForPaywall() {
    // Only proceed if this is a Substack site
    if (!isSubstackSite()) {
        return;
    }

    // Only show warning if content is not free
    if (!isFreeContent()) {
        insertWarningBanner();
    }
}

// Initial check with a longer delay to ensure content is fully loaded
setTimeout(checkForPaywall, 1500);

// Watch for dynamic content changes
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
            // Add a small delay to ensure content is stable
            setTimeout(checkForPaywall, 500);
            break;
        }
    }
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});
