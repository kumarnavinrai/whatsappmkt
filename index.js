const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const fs = require("fs");
const open = require("open");
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const ncp = require("copy-paste");
const basePath = '/node/bot/src/';
const cmdPath = '/d/node/bot/src/';

function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

const loadMainWindow = () => {
   
    const mainWindow = new BrowserWindow({
        width : 1400,
        height: 1000,
        x:0,
        y:0,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    });
    mainWindow.setMenuBarVisibility(false);
    //mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, "index.html"));
    //mainWindow.loadURL("https://google.com");
    const win = BrowserWindow.getFocusedWindow();
    var task = 1;
    var content = '';
    win.webContents.on("before-input-event", (event, input) => {
        switch (true) {
            case input?.type === 'keyDown' && 
            input?.key === '1' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            //"src/helpers/link.js"
            var pathtofile1 = path.join(__dirname, 'src', 'helpers', 'whatsappmkt.js');
                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile1,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === 'h' && 
            input?.modifiers[0] === 'control':
                    console.log("running ctrl r");
                    setTimeout(() => {
                        if(fs.existsSync('getmousepos.js')){
                            fs.unlinkSync('getmousepos.js');
                        }    
                        setTimeout(() => {
                            //content will be replaced by final login components
                            content = 'var robot = require("robotjs"); var ext = require("exit");console.log(robot.getMousePos()); setTimeout(() => { ext(5); }, 1000);';
                            fs.writeFile('getmousepos.js',content, function(err){
                                 if(err) throw err;
                                    // the path file will be replaced by login.js later onS
                                    execute('node getmousepos.js', (output) => {
                                        console.log(output);
                                        if(fs.existsSync('getmousepos.js')){
                                            fs.unlinkSync('getmousepos.js');
                                        }
                                    });
                             }); 
                        }, 1000);
                    }, 1000);                         
            break;
            case input?.type === 'keyDown' && 
            input?.key === '2' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile2 = path.join(__dirname, 'src', 'helpers', 'whatsappnumcheck.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile2,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === 'm' && 
            input?.modifiers[0] === 'control':
                    console.log("opening google chrome");
                    shell.openExternal('https://www.mudah.my');
                    //open.openApp(open.apps.chrome,{});
                    //open('https://gmail.com', { app: {name: 'google chrome', arguments: []}});          
            break;
            case input?.type === 'keyDown' && 
            input?.key === '4' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile4 = path.join(__dirname, 'src', 'helpers', 'thirdfollowup.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile4,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === '5' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'forthfollowup.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === '6' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'salesnavigator.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === '7' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'jobsnavigator.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === '8' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'joblinknavigator.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === '9' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'jobsjoblinknavigator.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })
                    
            break;
            case input?.type === 'keyDown' && 
            input?.key === 'q' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'peopledata.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })       
            break;
            case input?.type === 'keyDown' && 
            input?.key === 'e' && 
            input?.modifiers[0] === 'control':
            console.log("task 1 file was spwan");
            var pathtofile5 = path.join(__dirname, 'src', 'helpers', 'whatsappmkt.js');

                    content = 'console.log("task 1 file was deleted");console.log("task 1 file");';
                    var bat = spawn("node", [
                        pathtofile5,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    })       
            break;
            case input?.type === 'keyDown' && 
            input?.key === 'e' && 
            input?.modifiers[0] === 'control':
                mainWindow.webContents.closeDevTools();       
            break;
            case input?.type === 'keyDown' && 
            input?.key === 'o' && 
            input?.modifiers[0] === 'control':
	            console.log(ncp.paste());      
            break;
      
            case input?.type === 'keyDown' && 
            input?.key === 'u' && 
            input?.modifiers[0] === 'control':
            content = 'console.log("task 2 file was deleted");console.log("task 2 file")';
            console.log("send connect started");
            content = 'var robot = require("robotjs"); var ext = require("exit");console.log(robot.getMousePos()); setTimeout(() => { ext(5); }, 1000);';
            var pathtofileu = path.join(__dirname, 'src', 'helpers', 'sendconnect.js');

	                // to get page url from clipboard
                    var pageUrl = ncp.paste();

                    var bat = spawn("node", [
                        pathtofileu,
                        0,
                    ]);
                    bat.stdout.on('data', (data) => {
                        console.log('stdout'+data);
                    });
                    bat.stderr.on('data', (data) => {
                        console.log('stderr'+data);
                    });
                    bat.on('close', (code) => {
                        console.log('chid process exisited');
                    });                         
            break;

            default:
                true;
        }
        

        
    })
    
}

app.whenReady().then(() => {
    loadMainWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
      }

    });

    app.once('ready', () => {

        const opts ={
            show: false
        }
        if (mainWindow) {
          const pos = mainWindow.getPosition();
        }
  
      });
  
    
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});