# Dark Mode Toggle Chrome Extension

## Description
This Chrome extension allows users to toggle dark mode on any website by clicking a button. The extension injects a simple CSS style to change the background color to black and text color to white.

## Features
- Toggle dark mode on any website
- Simple and lightweight
- Works with a single click

## Installation
1. Download or clone this repository:
   ```sh
   git clone https://github.com/Ni1esh-Yadav/Dark-Mode-Toggle.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right corner).
4. Click **Load unpacked** and select the cloned folder.
5. Click the extension icon and press the **Toggle Dark Mode** button.

## File Structure
- `manifest.json` - Defines extension details and permissions.
- `popup.html` - UI for the popup.
- `popup.js` - Handles button click to inject dark mode CSS.
- `background.js` - Handles background events.
- `icon.png` - Icon for the extension.

## How It Works
1. When the user clicks the extension icon, a popup appears with a **Toggle Dark Mode** button.
2. Clicking the button executes a script that injects CSS into the current webpage.
3. The script toggles between dark mode and normal mode.

## Contributing
Feel free to fork this repository and make improvements!
