var fs = require("fs");

function wtch(files)
{   
    fs.watchFile(files, function (event, filename) {
        console.log("Server stopped");
        console.log("File changed :"+files);
        console.log("Server started");
    });
}

function find(root){
  var list = fs.readdirSync(root); 
  for(var i=0;i<list.length;i++){
      list[i]=root+"/"+list[i];
      if(fs.statSync(list[i]).isDirectory()){
        find(list[i]);   
      }
      else{
        wtch(list[i]);
      }  
           
  }
  

}

find(".");