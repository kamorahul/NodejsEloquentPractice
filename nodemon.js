var fs = require("fs");
findRoot('.');
function wch(files)
{  
    fs.watch(files,function (ev, file) {	
        console.log("Server stopped");
        console.log("File changed :"+files);
        console.log("Server started");
	//setTimeOut(1000);
    });
}

function findRoot(r){
fs.readdirSync(r);
  var list = fs.readdirSync(r); 
  for(var i=0;i<list.length;i++){
     list[i]=r+"/"+list[i];
     if(fs.statSync(list[i]).isDirectory()){
       findRoot(list[i]);   
     }
    else{
       wch(list[i]);
     }        
  }
}
   


