var fs =require('fs');
var path=require('path');
const child_process = require('child_process');

displayDirectoryContent('./');
function displayDirectoryContent(dir)
{
  var p=fs.readdirSync(dir);
    try{
     for(var i=0;i<p.length;i++)
      {  p[i]=dir+'/'+p[i];
         if(fs.lstatSync(p[i]).isDirectory())
         {
           displayDirectoryContent(p[i]);
         }else
         {
               watchFile(p[i]);
         }
       }
    }catch(e){
        console.log(e);
    }
}


function watchFile(vi){
      fs.watch(vi,(event,filename)=>
      {
        console.log("cahanged  ",filename);
      if(path.extname(filename)=='.js')
      {
        readFile(vi); // only js file excecuted
      }
      else{
        console.log("\nfile can not be excecuted because Not a .js file ", vi)
      }
        });

}

var readFile=(file)=>{ //read data from js file only
  var workerProcess = child_process.spawn('node', [file]);
 workerProcess.stdout.on('data', function (data) {
     console.log('stdout: ' + data);
  });
 workerProcess.stderr.on('data', function (data) {
     console.log('stderr: ' + data);
  });
 workerProcess.on('close', function (code) {
     //console.log('child process exited with code ' + code);
  });
}
