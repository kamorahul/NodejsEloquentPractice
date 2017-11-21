var fs=require('fs');
var path=require('path');


fs.readdir("./",function(err,files)
{
  files.forEach(function(filename)
  {
    var file=path.join(__dirname,"",filename);
    var stats=fs.statSync(file);
    //console.log(stats);
    if(stats.isFile() && filename=="example")
    {
      fs.readFile(file,"UTF-8",function(err,contents)
      {
        if (err)
       {console.log(err);}
      console.log(contents);
       }
       );
    }
  })
});
