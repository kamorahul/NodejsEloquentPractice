var process = require('process');
var {
    fork
} = require('child_process');
var fs = require('fs');


var path = process.cwd()
var files = []

var getFiles = function (path, files) {
    fs.readdirSync(path).forEach(function (file) {
        var subpath = path + '/' + file;
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, files);
        } else {
            files.push(path + '/' + file);
        }
    });
}
getFiles(path, files);



var test = fork('test.js');
console.log('Server started');
files.forEach((dir) => {
    fs.watchFile(dir, function (event, filename) {
        test.kill();
        console.log('Server stopped');
        test = fork('./test.js');
        console.log('Server started');
    });
});
// fs.watchFile('./', function (event, filename) {
//     test.kill();
//     console.log('Server stopped');
//     test = fork('./test.js');
//     console.log('Server started');
// });
// fs.watch(__dirname, function (event, filename) {
//     console.log(`restart server`);
//     test.kill();

//     test = fork('test.js');    
//     console.log("server restarted")
// }); 

process.on('SIGINT', function () {
    test.kill();
    fs.unwatchFile('./test.js');
    process.exit();
});
