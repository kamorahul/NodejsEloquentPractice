var test = require('./1.js')

var flag = false;
var dir = "pranjal1" , col = "col1";

var schema = {
  "id":"number",
  "name":"string",
  "gender":"string"
  
}

var myobj = {
			"id" : 2,
			"name" : "Bhardwaj",
			"gender" : "male"
			}

if(!(flag)){
test.mdbcreate(dir,col,schema);
flag = true;
}
test.mdbinsert(dir,col,myobj);