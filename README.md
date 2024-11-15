# Substack Paywall Warning

> "I read something that went on for like five pages before I hit the paywall and I was absolutely furious and determined never to get suckered like that again, so I introduce to you, the Substack Paywall Warning" 

> -Paul Crowley

This Chrome extension was commissioned by [Paul Crowley](https://x.com/ciphergoth) to show a warning banner when a Substack article has a paywall, helping readers identify premium content before they start reading, only later hitting the paywall and unable to finish the content without subscribing. Substack uses an unusually small text of "PAID" at the top of articles and the lack of prominence can be considered a dark pattern. This extension seeks to remedy that.

## Features

- Automatically detects Substack articles with paywalls
- Works on both substack.com and custom domain Substack sites
- Shows a clear warning banner at the top of the page (that can be dismissed on click)
- Real-time detection of dynamically loaded paywalls

## Installation

1. Download a zip file of the repository

![How to download zip](how%20to%20download%20zip.png)

2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right

![Enable developer mode and load unpacked](enable%20developer%20mode%20and%20then%20click%20%22Load%20unpacked%22%20exetension.png)

4. Click "Load unpacked" and select the directory containing these files
5. The extension is now installed and active, refresh any open pages to see it working.

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

Not in any way affiliated with, endorsed by, or sponsored by Substack Inc. All trademarks, service marks, trade names, and logos referenced herein belong to their respective owners. Their use here is for identification purposes only and does not imply ownership by us or endorsement by them.
