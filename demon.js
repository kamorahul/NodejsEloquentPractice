var fs = require("fs");

function watchit(filepath)
{   
    fs.watchFile(filepath, function (event, filename) {
        console.log("Server stopped");
        var arr=filepath;
        var inx=1;
        for(var j=0;j<filepath.length;j++)
        {
            if(arr[j]=='/')
            {
                inx=j;
            }
        }
        console.log("File changed is");

        for(var j=inx+1;j<filepath.length;j++)
        {
            process.stdout.write(arr[j]);
        }
        console.log();
        console.log("FIle is located at "+filepath);
        console.log("Server started");
    });
}
function find(root){
  var list = fs.readdirSync(root); 
  for(var i=0;i<list.length;i++){
      //console.log(list[i]);
      list[i]=root+"/"+list[i];
      //console.log(list[i]);
      if(fs.statSync(list[i]).isDirectory()){
        find(list[i]);   
      }
      else{
        watchit(list[i]);
      }  
           
  }
  

}

find(".");
