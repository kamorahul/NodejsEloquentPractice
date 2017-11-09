var app = require('./My_Mongoos.js');

//Sir call below three function one at a time
app.my_createCollection("abc",{ "properties": { "name": { "type": "string" }, "age":{ "type": "integer"}, "address": { "type": "string" } }, "required": ["name","age"] });
//app.my_insertData("abc",{name:"Rahul",age:21,address:"Kanpur"});
//app.my_find("abc");