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
    			child_process.spawn('nodejs', [file]);
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
