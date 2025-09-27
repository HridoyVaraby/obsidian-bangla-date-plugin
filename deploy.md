# How to Deploy and Test the Plugin

This guide explains how to manually install the plugin in Obsidian for testing purposes.

## Steps

1.  **Build the Plugin:**
    If you have made changes to the source code, you need to build the plugin. Open your terminal in the project root and run:
    ```bash
    npm run build
    ```
    This will compile the TypeScript code and create the necessary plugin files (`main.js`, `manifest.json`, `styles.css`) in the project root.

2.  **Locate Your Obsidian Vault:**
    Open Obsidian and go to `Settings` > `About`. You will see the path to your current vault.

3.  **Navigate to the Plugins Folder:**
    In your file explorer, navigate to your vault's folder. Inside it, you will find a hidden folder named `.obsidian`. Go into the `.obsidian` folder, and then into the `plugins` folder.

    The full path will look something like this:
    `[Your Vault Path]/.obsidian/plugins/`

4.  **Create the Plugin Directory:**
    Inside the `plugins` folder, create a new folder named `obsidian-bangla-date-tag`.

5.  **Copy Plugin Files:**
    Copy the following files from your project's root directory to the newly created `obsidian-bangla-date-tag` folder:
    - `main.js`
    - `manifest.json`
    - `styles.css` (if it exists)

6.  **Enable the Plugin in Obsidian:**
    - Restart Obsidian or reload the app.
    - Go to `Settings` > `Community Plugins`.
    - You should see "Bangla Date Tagger" in the list of installed plugins. Make sure the toggle switch is on to enable it.

7.  **Test the Plugin:**
    - Open any note in Obsidian.
    - Type the tag `{{bn-date}}`.
    - Open the Command Palette (Ctrl+P or Cmd+P) and search for "Insert Bangla Date".
    - Run the command. The `{{bn-date}}` tag should be replaced with the formatted Bangla and English dates.
