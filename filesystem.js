var http=require("http");

var fs=require("fs");


var files=fs.readdirSync("./");//files
var dir=fs.readdirSync("../");//dire
var dirfile=fs.readdirSync("../file");//dire

console.log("Files are \n "+ files);
console.log("Direct are \n  "+ dir);
console.log("Files under Direct are \n  "+ dirfile);


// Require the file system
// Watch the sim directory
fs.watch("/home/vikas/jugnoo/demon", { persistent: true }, function (event, fileName) {
  console.log("Event: " + event);

   // fs.readFile('/home/vikas/jugnoo/demon','utf8', (err, data) => {
  
   // 	console.log("Contents of file is\n :"+ data);
  console.log(fileName + "\n");
});