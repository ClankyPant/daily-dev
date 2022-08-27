const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    })

    win.loadURL(`file://${__dirname}/dist/daily-dev/index.html`)

    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    
    // MacOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {

    // MacOS specific close process
    if (win === null) {
        createWindow()
    }
})