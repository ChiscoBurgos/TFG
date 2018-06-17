const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const ipcM = require('electron').ipcMain
const ipcR = require('electron').ipcRenderer
let win;   
const fs = require('fs')

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600, icon:path.join(__dirname,"images/ubu.png") })
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../dist/WelcomeScreen/index.html'),//hay que modificarlo tras la instalación
        protocol: 'file',
        slashes: true
    }));
    /*if (isDev()) {
        win.webContents.openDevTools()
    }  */ 

    //Ventana sin menu
    win.setMenuBarVisibility(false);
    win.setFullScreen(true);

    //Tamaño ventana
    var winSize = win.getSize();

    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})