var fs = require("fs");

function wtch(files)
{
    fs.watchFile(files, function (event, filename) {
        console.log("Server stopped");
        var arr=files;
        console.log("File changed :"+files);

        console.log("Server started");

    });
}

fs.watchFile('anuj.txt', (eventType, data) => {
  console.log(`event type is: ${eventType}`);

  fs.readFile('anuj.txt','utf8', (err, data) => {
	  // console.log(`EventType is : ${err}`);

  	console.log("Contents of file is\n :"+ data);
  	console.log(`change :${data}`);
});
});



function find(root){
  var list = fs.readdirSync(root);
  for(var i=0;i<list.length;i++){
      console.log(list[i]);
      list[i]=root+"/"+list[i];
      console.log(list[i]);
      if(fs.statSync(list[i]).isDirectory()){
        find(list[i]);
      }
      else{
        wtch(list[i]);
      }

  }


}

find(".");
