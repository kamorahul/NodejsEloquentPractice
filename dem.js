const process = require('process');
const {fork} = require('child_process');
const { spawn } = require('child_process');
var fs = require('fs');
const ls = spawn('node', ['./my.js']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


var test = fork('./my.js');
console.log('Server started');

fs.watchFile('./my.js', function (event, filename) {
    test.kill();
    console.log('Server stopped');
    test = fork('./my.js');
    console.log('Server started');
});

process.on('EXIT', function () {
    test.kill();
    fs.unwatchFile(process.argv[2]);
    process.exit();
});