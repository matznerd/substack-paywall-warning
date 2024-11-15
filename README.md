# Substack Paywall Warning

> "I read something that went on for like five pages before I hit the paywall and I was absolutely furious and determined never to get suckered like that again, so I introduce to you, the Substack Paywall Warning" 

-Paul Crowley

This Chrome extension was commisioned by Paul Crowley to show a warning banner when a Substack article has a paywall, helping readers identify premium content before they start reading, only later hitting the paywal and unable to finish the content without subscribing. Substack uses an unually small text of "Paid" and the lack of promienence cna be considered a dark pattern. This extension seeks to remedy that.

## Features

- Automatically detects Substack articles with paywalls
- Works on both substack.com and custom domain Substack sites
- Shows a clear warning banner at the top of the page (that can be dismissed on click)
- Real-time detection of dynamically loaded paywalls

## Installation

1. Download a zip file of the repository
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked" and select the directory containing these files
6. The extension is now installed and active

## How It Works

The extension:
1. Detects if the current site is a Substack publication by checking for:
   - Substack domain
   - Substack-specific elements
   - Substack CDN resources
2. Then Monitors for paywall indicators such as:
   - Explicit paywall elements
   - Subscription prompts
   - Locked content markers
3. Displays a warning banner when a paywall is detected

## Main Files

- `manifest.json`: Extension configuration and permissions
- `content.js`: Core logic for Substack and paywall detection
- `styles.css`: Styling for the warning banner

## Privacy

This extension:
- Does not collect any user data
- Does not modify article content
- Only runs on web pages that have Substack elements
- Does not require any special permissions beyond page access

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use and modify as needed.

## Legal

Not in any affiliated or endorsed by Substack. All right of the Substack name are Substack's.
