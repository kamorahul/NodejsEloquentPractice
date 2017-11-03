var fs = require("fs");
var {fork} = require("child_process");
var process = require("process");

const args = process.argv; //need to pass file to be executed as argument...like: node filesystem.js file1.js
// console.log(args);
if(args.length > 2 && args.length < 4){
    if(/[a-zA-Z0-9]\.js/.test(args[2])){
       fileSystemStuff(args[2]);
    }else{
        console.log(args[2]+" is not a .js file");
    }
}
function fileSystemStuff(input){
     var inputFile = "./"+input;
    var arrFiles = [];
    ReadDir(".");
    function ReadDir(path){
        var files = fs.readdirSync(path);
        files.forEach(function(item){
            if(/[a-zA-Z0-9]\.[a-zA-Z0-9]/.test(item)){
                arrFiles.push(path+"/"+item);
            }else{
                ReadDir(path+"/"+item);
            }
        })
    }
    
    if(arrFiles.indexOf("./"+input) > -1){
        var temp = fork(inputFile);
        arrFiles.forEach(function(item){ 
            fs.watchFile(item,function(){
                temp.kill();
                console.log(' ServerStopped');
                temp = fork(inputFile);
                console.log("ServerRestarted");
        
            })
        })
        
        
        process.on('SIGINT', function () {
            temp.kill();
            arrFiles.forEach(function(item){
                fs.unwatchFile(inputFile);
            })
            process.exit();
        });
    }else{
        console.log(input+" does not exist");
    }
}