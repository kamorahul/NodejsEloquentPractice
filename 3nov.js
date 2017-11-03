var fs = require("fs");

function abcd(files)
{   
    fs.watchFile(files, function(event, filename) {
        console.log("Server stopped");
        console.log("File changed ->" +files);
        console.log("Server started");
    });
}
function efgh(root){
  var ls = fs.readdirSync(root); 
  for(var i=0;i<ls.length;i++){
      ls[i]=root+"/"+ls[i];
      if(fs.statSync(ls[i]).isDirectory()){
        efgh(ls[i]);   
      }
      else{
        abcd(ls[i]);
        

      }  
           
  }
  

}
efgh(".");

