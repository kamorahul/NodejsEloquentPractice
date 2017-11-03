var fs = require("fs");

function attach(time)
{   
    fs.watchFile(time, function (event, filename) {
        console.log("Server stopped");
        console.log("File changed :"+time);
        console.log("Server started");
    });
}

function search(dir){
  var contents = fs.readdirSync(dir); 
  for(var i=0;i<contents.length;i++){
      contents[i]=dir+"/"+contents[i];
      if(fs.statSync(contents[i]).isDirectory()){
        search(contents[i]);   
      }
      
      else{
        attach(contents[i]);

        

      }  
           
  }
}


search(".");