var fs=require("fs");
var file=require('./example.txt');

function ReadFile(err,data)
 {
if(err)
throw err;
else
  { //fs.readFile(data.toString());}
console.log(data);
  }
}

function status(state)
{
if(state.isFile())
  {
fs.readFile(file,"utf8",ReadFile);}
}

function fexist(exist)
{
if(exist)
    {
   fs.state(file,status);}
}
fs.exist(file,fexist());


/*fs.readFile(file,"UTF-8",function(err,contents)
  if(err) throw err;
  else {
    console.log(contents);
  }
}) */
