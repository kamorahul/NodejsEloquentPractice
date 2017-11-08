var http=require("http");

var fs=require("fs");

//http.createServer(function (response,request){



fs.watchFile('message.txt', (eventType, data) => {
  console.log(`event type is: ${eventType}`);

  fs.readFile('message.txt','utf8', (err, data) => {
	  // console.log(`EventType is : ${err}`);
  
  	console.log("Contents of file is\n :"+ data);
  	console.log(`change :${data}`);
});
});

  

// fs.readFile('message.txt','utf8', (err, data) => {
// 	  console.log(`EventType is : ${err}`);
  
//   console.log(data);
// });


fs.writeFile("demon1.js", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 


// }).listen(9999);
// console.log("Server is running at 127.0.0.1/9999")


var files=fs.readdirSync("./");//files
var dir=fs.readdirSync("../file");//dir
var dir=fs.
console.log("Files are "+ files);
console.log("Direct are "+ dir);

