const { shell, app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const contextMenu = require('electron-context-menu');
const fs = require('fs');
const package = require('./package.json');

var appData = {};
contextMenu({
    labels: {
        copy: '复制',
        cut: '剪切',
        paste: '粘贴',
    },
    showSelectAll: false,
    showSearchWithGoogle: false,
    showInspectElement: false,
    prepend: (defaultActions, parameters, browserWindow) => [
        {
            label: '刷新',
            // Only show it when right-clicking images
            click: () => {
                browserWindow.webContents.reload();
            }
        },
    ],
})


const template = [
    {
        label: '菜单',
        submenu: [
            {
                label: '刷新',
                role: 'reload'
            },
            {
                label: '强制刷新',
                role: 'forceReload'
            },
            {
                label: '切换全屏',
                role: 'togglefullscreen'
            },
            {
                label: '退出',
                role: 'quit'
            }
        ]
    },
    {
        label: '关于',
        role: 'about'
    }
];
const createMainWindow = () => {


    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        appData = JSON.parse(data);
        app.setAboutPanelOptions({
            applicationName: appData.title,
            applicationVersion: 'v'+ package.version,
            copyright: appData.copyright,
            authors: appData.authors,
        })
    })

    const mainWindow = new BrowserWindow({
        show: false,
        icon: path.join(__dirname, 'logo.ico'),
        title: appData.title,
        titleBarStyle: 'hiddenInset',
        useContentSize: true,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
            devTools: false,
        }
    })

    mainWindow.maximize();

    mainWindow.webContents.setWindowOpenHandler((edata) => {
        shell.openExternal(edata.url);
        return { action: "deny" };
    });

    mainWindow.loadFile('index.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    })
};



app.whenReady().then(() => {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    createMainWindow();

    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    app.on('activate', () => {
        // 在 macOS 系统内, 如果没有已开启的应用窗口
        // 点击托盘图标时通常会重新创建一个新窗口
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    });
});



// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});