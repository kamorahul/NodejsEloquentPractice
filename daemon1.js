var fs=require('fs');
var testFolder = './';
var http=require('http');
http.createServer((req,res)=>{

  check(testFolder);

}).listen(3000);

function check(testFolder)
{
  console.log("hello");
fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    if(file.match(".js")!=null)
    {
      fs.watchFile(testFolder+file, (curr, prev) => {
        //console.log(/*`file : `+testFolder+*/file+` is modified at ${curr.mtime}`);
        console.log("Server Restarted because "+file+" is modified");
      });
    }
    else
    {
      var temp=file.match("[a-z0-9]+.[a-z0-9]+");
      if(temp[0]==file){
        //console.log(/*"other files : "+*/file+" is not added because this is not a .js file");
      }
      else{
        //console.log("directory :"+ file);
        check(testFolder+file+"/");
      }
    }
  });
  })
}
