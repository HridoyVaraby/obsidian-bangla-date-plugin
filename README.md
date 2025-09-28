# Obsidian Bangla Date Tagger

This plugin for Obsidian automatically inserts the current date in both Bangla and English formats.

## How it Works

Simply type `{{bn-date}}` in any note and press `Space` or `Enter`. The shortcode will be instantly replaced with the current date, beautifully formatted.

**Example Output:**

`📅 বারঃ রবিবার; বাংলা তারিখ: ১৩ আশ্বিন, ১৪৩২ । 📅 ইংরেজি তারিখঃ ২৮ সেপ্টেম্বর, ২০২৫ ;`

*Note: The date in the example is for demonstration. The plugin will always generate the current date.*

The plugin also provides a manual command to insert the date if you prefer.

## How to Use

### Automatic Replacement (Recommended)

1.  In any note, type the shortcode `{{bn-date}}`.
2.  Press the `Space` bar or the `Enter` key.
3.  The shortcode will be automatically replaced with the formatted date string.

### Manual Insertion

1.  Place your cursor where you want the date to appear.
2.  Open the Command Palette (using `Ctrl+P` on Windows/Linux or `Cmd+P` on macOS).
3.  Search for the command `Insert Bangla Date` and execute it.
4.  The formatted date string will be inserted at your cursor.

For even faster manual use, you can set a hotkey for the `Insert Bangla Date` command in Obsidian's settings (`Settings` > `Hotkeys`).

## Installation

### From the Community Plugins Store

(Coming Soon) Once the plugin is published, you will be able to install it directly from the Obsidian Community Plugins store by searching for "Bangla Date Tagger".

### Manual Installation

1.  Download the `main.js`, `manifest.json`, and `styles.css` files from the [latest release](https://github.com/hridoyvaraby/obsidian-bangla-date-tag/releases).
2.  Go to your Obsidian vault's folder.
3.  Navigate to the `.obsidian/plugins/` directory.
4.  Create a new folder named `obsidian-bangla-date-tag`.
5.  Copy the downloaded files into this new folder.
6.  Restart Obsidian.
7.  Go to `Settings` > `Community Plugins` and enable "Bangla Date Tagger".

## For Developers

If you want to contribute or modify the plugin:

1.  Clone this repository.
2.  Run `npm i` to install the dependencies.
3.  Run `npm run dev` to start the development server, which will automatically recompile the plugin on file changes.
4.  Follow the manual installation guide to load the development version in your vault.