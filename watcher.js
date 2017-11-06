var fs=require('fs');
path=require('path');

function crawl(dir){
  var files=fs.readdirSync(dir);
  for(var x in files){
    var next=path.join(dir,files[x]);
    if(fs.lstatSync(next).isDirectory()==true){
      crawl(next);
    }
    else{
      watch(next,files[x]);
      //console.log(dirName);
    }
  }
}
crawl(__dirname)
function watch(filePath,fileName){
  console.log("Applied watch in"+fileName );

  fs.watchFile(filePath,{interval:2000},function(curr){
    console.log(fileName+"has been modified at :",curr.mtime);
  })

}
