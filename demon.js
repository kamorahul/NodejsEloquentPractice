// var fs = require('fs');
// var filePath = 'result.txt';
// var file = fs.readFileSync(filePath);
// console.log('Initial File content : ' + file);
// fs.watchFile(filePath, function() {
//     console.log('File Changed ...');
//     file = fs.readFileSync(filePath);
//     console.log('File content at : ' + new Date() + ' is \n' + file);
// });


// var fs = require('fs');
// var filePath = '.';
// var file = fs.readFileSync(filePath);
// //console.log('Initial File content : ' + file);

// fs.watch(filePath, function(event, filename) {
//   if(filename){
//     console.log('Event : ' + event);
//   //  console.log(filename + ' file Changed ...');
//     file = fs.readFileSync(filePath);
//   //  console.log('File content at : ' + new Date() + ' is \n' + file);
//   }
//   else{
//    // console.log('filename not provided')
//   }
// });





var fs=require('fs');
var folder = './';
check(folder);
const child_process = require('child_process');


function check(folder)
{
	fs.readdir(folder, function(err, files)
	{
  		files.forEach(function(file)
  		{
    		if(file.match(".js")!=null)
    		{
      			fs.watchFile(folder+file, function(curr, prev)
      			{
        			console.log(`file : `+folder+file+` is modified at ${curr.mtime}`);
      			});
    		}
    		else
    		{
      			var temp=file.match("[a-z0-9]+.[a-z0-9]+");

      			if(temp[0]==file)
      			{
        			console.log("other files : "+file);
      			}
      			else
      			{
        			console.log("directory :"+ file);
        			check(folder+file+"/");
      			}
    		}
  		});
  	})
}