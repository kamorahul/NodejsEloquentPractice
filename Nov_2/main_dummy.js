//////INPUT-->FILESTREAM
var fs = require("fs");
fs.readFile('/home/aditya/Documents/JsPractice/Nov_2/trial.js','utf-8', (err, data) => {
if (err) throw err;
console.log(data);
fs.writeFile('message.js', data, (err) => {if (err) throw err;});});
//////CHILD PROCESS//////
const  {spawn}  = require('child_process');
//const ls = spawn('ls',['-1']);
const ls = spawn('node', ['/home/aditya/Documents/JsPractice/Nov_2/message.js']);
ls.stdout.on('data', (data) => {_append(data);console.log(`stdout: ${data}`);});
ls.stderr.on('data', (data) => {console.log(`stderr: ${data}`);});
ls.on('close', (code) => {console.log(`child process exited with code ${code}`);});
//////////OUTPUT-->FILESTREAM
function _append(data){
  var fs = require("fs");
  fs.appendFile('/home/aditya/Desktop/task',Date()+"\n"+data, (err) =>{
    if (err) throw err;
    console.log('The "data to append" was appended to file!');});}
