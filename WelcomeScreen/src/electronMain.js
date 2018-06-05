const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
let win;
function isDev() {
    return process.mainModule.filename.indexOf('app.asar') === -1;
};
function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
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