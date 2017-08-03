
const electron = require("electron");
const baristos = electron.app;
const BW = electron.BrowserWindow;

const path = require("path");
const url  = require("url");

const jetpack = require('fs-jetpack');
const destDir = jetpack.cwd('./app');

let mainWindow

// Main Entry point to the application
function startBaristOS () {

    mainWindow = new BW({ width: 800, height: 600 })

    mainWindow.loadURL(url.format({
        pathname: destDir.path('html/index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', function () {
        mainWindow = null
    })

}

baristos.on('ready', startBaristOS)

baristos.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
    {
        baristos.quit()
    }
})


baristos.on('activate', function () {
    if (mainWindow == null)
    {
        startBaristOS()
    }
})
