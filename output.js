var fs = require('fs')
var  data = '';
var readstream = fs.createReadStream('input.txt')
var data = '';
readstream.setEncoding('UTF8');
readstream.on('data',function(chunk)
{
data = data + chunk;
});

readstream.on('end',function()
{
console.log(data);
})

var writedata = 'hello world';
var writedatastream = fs.createWriteStream('output.txt')
writedatastream.write(writedata,'UTF8');
writedatastream.on('finish',function()
{
console.log('write completed');
});

