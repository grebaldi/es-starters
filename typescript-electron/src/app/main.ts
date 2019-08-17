import { app, BrowserWindow } from "electron";
import * as path from "path";

import installExtension, { 
    REACT_DEVELOPER_TOOLS, 
    REDUX_DEVTOOLS 
} from "electron-devtools-installer";
import chokidar from "chokidar";

if (process.env.NODE_ENV === 'development') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '!';
}


let mainWindow: Electron.BrowserWindow | null;
let watcher: chokidar.FSWatcher | null;

async function createWindow() {
    if (process.env.NODE_ENV === 'development') {
        await installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));
        await installExtension(REDUX_DEVTOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));
    }

    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "./index.html"));
    mainWindow.setMenuBarVisibility(false);

    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }
    
    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    if (process.env.NODE_ENV === 'development') {
        watcher = chokidar.watch([
            path.join(__dirname, "./index.html"),
            path.join(__dirname, "./index.bundle.js")
        ]).on('change', () => {
            if (mainWindow !== null) {
                mainWindow.webContents.reloadIgnoringCache();
            }
        });
    }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('quit', () => {
    if (watcher !== null) {
        watcher.close();
        watcher = null;
    }
});