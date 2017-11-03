var fs=require('fs');
var testFolder = './';
var flag;
check(testFolder);

function check(testFolder)
{
fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    if(file.match(".js")!=null){
      fs.watchFile(file, (curr, prev) => {
        console.log(`file : `+testFolder+file+` is modified at ${curr.mtime}`);
      });
    }
    else
    {
      var temp=file.match("[a-z0-9]+.[a-z0-9]+");

      if(temp[0]==file){
        console.log("other files : "+file);
      }
      else{
        console.log("directory :"+ file);
        check(testFolder+file+"/");
      }
    }
  });
  })
}
