var cp = require('child_process');
var cp1=cp.spawn('node',['connect.js']);
cp1.stdout.on('data',function(Data){
	console.log(Data.toString());
})

cp1.stderr.on('data',function(err){
	console.log(err.toString());

})