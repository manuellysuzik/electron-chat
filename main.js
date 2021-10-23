
const { app, BrowserWindow } = require('electron')


app.on('ready', () => {
  function createWindow() {
    const window = new BrowserWindow({
      width: 800,
      height: 600
    })

    window.loadURL('https://www.google.com')
  }

  app.whenReady().then(() => {
    createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})