//synchronus calling and reading....

var fs=require("fs");
console.log("program started");

var data=fs.readFileSync('anchal.txt') //reading the text fie

console.log(data.toString());  //print the data
console.log("program ended");


 //asynchronus calling i.e., raeding the file as well as executing the next statements

 var fss=require("fs");
 console.log("program started");
 fss.readFile('anchal.txt',function(err,data) // asynchronus callback
 {
   if (err)
   return console.error("error");
   else {
        console.log(data.toString()); //reading data from text file
        }
 });
 console.log("program ended");
