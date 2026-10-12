# Birthday Website

A premium romantic birthday website built with plain HTML, CSS, and JavaScript.

## Features
- Personalized greeting and birthday countdown
- Heartfelt birthday letter
- Photo gallery with lightbox viewer
- Special memories timeline
- Reasons-you-are-special cards
- Interactive birthday cake with candle action
- Music player with a user-provided audio URL
- Surprise gift reveal
- Birthday wishes cards and add-your-own wishes
- Editable website panel with live update preview
- Save, cancel, restore defaults, export, and import data
- LocalStorage persistence for content
- Responsive layout for mobile and desktop browsers

## Files
- index.html
- style.css
- script.js
- README.md

## How to open it
1. Download or copy all files into the same folder.
2. Open index.html in any modern browser.
3. The site is static and works well for GitHub Pages or simple hosting.

## How to edit the website
- Click the pencil button in the lower-right corner.
- Update the name, birthday date, greeting, letters, gallery, memories, wishes, and color theme.
- Use Save Changes to apply the edits.
- Use Cancel to discard changes.
- Use Restore Defaults to reset the site.
- Use Export Content to JSON to download the current data.
- Use Import Content from JSON to load a previously exported file.

## Storage notes
- User content is saved in LocalStorage so the website remembers changes on the same browser.
- Uploaded image files are not automatically synced across devices.
- IndexedDB can be used for browser-side caching of image data, but browser storage is local and not a substitute for cloud sync.
- A frontend-only PIN is not strong security and should not be treated as secure protection for sensitive content.

## Browser compatibility
- Works in modern desktop and mobile browsers.
- Audio playback is intentionally gated behind user interaction because browsers block autoplay for audio.

## GitHub Pages publishing
1. Push these files to a GitHub repository.
2. In GitHub, open the repository and go to Settings > Pages.
3. Choose the branch and root folder (usually main / root).
4. Save the settings.
5. GitHub Pages will provide a URL for the published site.

## Customization tips
- Replace the placeholder images with your own photos.
- Set a custom audio URL in the Edit Website panel.
- Adjust the birthday date to your actual celebration date.
- Update the text to include your personal message, names, and memories.
