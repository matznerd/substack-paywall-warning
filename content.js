// Function to check if site is a Substack site
function isSubstackSite() {
    return (
        // Check domain
        window.location.hostname.includes('substack.com') ||
        document.querySelector('link[href*="substackcdn.com"]') !== null
    );
}

// Function to remove the global Subscribe button
function removeSubscribeButton() {
    const subscribeButton = document.querySelector('.subscribe-button');
    if (subscribeButton) {
        subscribeButton.style.display = 'none'; // Hide the button
    }
}

// Function to check if content is free
function isFreeContent() {
    const article = document.querySelector('article');
    if (!article) {
        return true;
    }

    const paywallElement = article.querySelector('div.paywall[data-testid="paywall"][data-component-name="Paywall"]');
    if (paywallElement) {
        const computedStyle = window.getComputedStyle(paywallElement, '::before');
        const beforeContent = computedStyle.getPropertyValue('content');
        const afterContent = window.getComputedStyle(paywallElement, '::after').getPropertyValue('content');

        if (beforeContent && afterContent) {
            return false;
        }
    }

    const commentPaywall = document.querySelector('h2.paywall-title');
    const subscriptionWidget = document.querySelector('.subscription-widget-wrap');
    if (commentPaywall || subscriptionWidget) {
        return true;
    }

    return true;
}

// Function to create and insert warning banner
function insertWarningBanner() {
    if (document.querySelector('.substack-paywall-warning')) {
        return;
    }

    const banner = document.createElement('div');
    banner.className = 'substack-paywall-warning';
    banner.innerHTML = `
        <div class="warning-content">
            <span class="warning-icon">🔒</span>
            <span class="warning-text">This post requires a paid subscription</span>
            <span class="warning-icon">🔒</span>
        </div>
    `;

    // Add click event to remove banner
    banner.addEventListener('click', () => {
        banner.remove();
    });

    const article = document.querySelector('article') || 
                   document.querySelector('.post') || 
                   document.querySelector('.main') || 
                   document.body;
    article.insertBefore(banner, article.firstChild);
}

// Main function
function checkForPaywall() {
    if (!isSubstackSite()) {
        return;
    }

    removeSubscribeButton();

    if (!isFreeContent()) {
        insertWarningBanner();
    }
}

setTimeout(checkForPaywall, 1500);

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
            setTimeout(checkForPaywall, 500);
            break;
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
