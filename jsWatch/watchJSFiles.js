/*
  THIS PROGRAM IS TO APPLY WATCH FUNCTION IN EACH OF THE JS FILE PRESENT IN THE PATH SPECIFIED
*/
var fs=require('fs');
var path='/home/lokesh/coding/JavaScript';

// to match .js extension 
var reg=/\.js$/;

function findJSFile(dirPath){
	var jsFiles=[];
	var dirContent=fs.readdirSync(dirPath);
	for (var i = dirContent.length - 1; i >= 0; i--) {
		absName=dirPath+'/'+dirContent[i];
		var fileStat=fs.statSync(absName);
		if (fileStat.isDirectory()) 
		{
			jsFiles=jsFiles.concat(findJSFile(absName));
		}
		else if(absName.match(reg))
		{
			jsFiles.push(absName);
		}
	}

	return jsFiles;
}

var jsFiles=findJSFile(path);
console.log(jsFiles);
for (var i = jsFiles.length - 1; i >= 0; i--) {
	fs.watch(jsFiles[i],function(event,filename){
		console.log(`${event} ho rha hai`);
		if (filename) {console.log(`${filename} mein`);}
	});
}
