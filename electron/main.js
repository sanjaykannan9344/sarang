const { app, BrowserWindow, screen: electronScreen } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const { ipcMain } = require("electron");

ipcMain.on("close", () => app.quit());

const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    width: electronScreen.getPrimaryDisplay().workArea.width,
    height: electronScreen.getPrimaryDisplay().workArea.height,
    show: false,
    icon: path.join(__dirname, "icon.png"),
    backgroundColor: "white",
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  const startURL = isDev
    ? "http://localhost:5000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.removeMenu();

  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    mainWindow.loadURL(url);
  });
  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });
};

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (!BrowserWindow.getAllWindows().length) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
