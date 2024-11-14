# Substack Paywall Warning

A Chrome extension that shows a warning banner when a Substack article has a paywall, helping readers identify premium content before they start reading.

## Features

- Automatically detects Substack articles with paywalls
- Works on both substack.com and custom domain Substack sites
- Shows a clear, non-intrusive warning banner at the top of the page
- Supports dark mode
- Responsive design for all screen sizes
- Real-time detection of dynamically loaded paywalls
- Print-friendly (warning banner is hidden when printing)

## Installation

1. Download or clone this repository
2. Convert the `icon.svg` file to PNG format in the following sizes:
   - `icon16.png` (16x16)
   - `icon48.png` (48x48)
   - `icon128.png` (128x128)
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
2. Monitors for paywall indicators such as:
   - Explicit paywall elements
   - Subscription prompts
   - Locked content markers
3. Displays a warning banner when a paywall is detected

## Files

- `manifest.json`: Extension configuration and permissions
- `content.js`: Core logic for Substack and paywall detection
- `styles.css`: Styling for the warning banner
- `icon.svg`: Vector source for extension icons

## Development

To modify the extension:
1. Make changes to the relevant files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Changes will be applied immediately

### Testing
Test the extension on various types of Substack articles:
- Free articles
- Paywalled articles
- Custom domain Substacks
- Different screen sizes
- Dark mode

## Troubleshooting

If the extension isn't working:
1. Ensure all required files are present
2. Check that the PNG icons have been created
3. Verify the extension is enabled in Chrome
4. Try refreshing the extension in Chrome's extension manager
5. Clear your browser cache if needed

## Known Limitations

- The extension needs to load before it can detect a paywall
- Some custom-styled Substack sites might need manual checking
- Dynamic content changes might take a moment to be detected

## Privacy

This extension:
- Does not collect any user data
- Does not modify article content
- Only runs on web pages
- Does not require any special permissions beyond page access

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use and modify as needed.
