var fs=require('fs');
check('./');
function check(a)
{
	fs.readdir(a, function(err, files)
	{
  		files.forEach(function(file)
  		{
    		if(file.match(".js")!=null)
    		{
      			fs.watchFile(a+file, function(c, p)
      			{
        			console.log(`file : `+a+file+` is modified at ${c.mtime}`);
      			});
	         }
    		else
    		{
      			var t=file.match("[a-z0-9]+.[a-z0-9]+");
                        if(t[0]==file)
      			{
        			console.log("other files : "+file);
      			}
      			else
      			{
        			console.log("directory :"+ file);
        			check(a+file+"/");
      			}
    		} 		
                 });
  	});
}
