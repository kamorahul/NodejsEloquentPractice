const fs = require('fs');
const {fork} = require('child_process');
const process = require('process');
const path = './testFile.js';

var file = fork(path);
console.log("Getting server started!");


fs.watchFile(path, function() {

    console.log('Data Of File Changed ...');
    file.kill();
    console.log("Server 3003 stopped")
    file = fork(path);
    console.log('Woops! Server 3003 started')
    console.log('File data at : ' + new Date() + ' is \n' + file);
});


process.on('exit', () => {
  file.kill();
  fs.unwatchFile(path);
  process.exit();

});
