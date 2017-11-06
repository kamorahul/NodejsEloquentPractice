const fs = require('fs');
var a = './server1.js';

var fork = require('child_process').fork;
var file = fork(a);

const path = '/home/chandra/Desktop';
var list1 = [];

var para1 = /[a-zA-Z0-9](.js)$/

var list=fs.readdirSync(path)
for(i in list)
{
if(fs.statSync(path+'/'+list[i]).isFile())
{
list1.push(list[i])
if(list[i].match(para1))
fs.watchFile(list[i],function()
{
console.log('file is edited');
file.kill();
console.log('server is stopped');
file = fork(a);
console.log('server is started')
console.log('data is changed')
})

}

}
