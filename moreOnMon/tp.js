//String Number Boolean Array Object Phone RegExp-[expretion]g
var mon=require('./mon');
obj ={name:12};
obj1={name:{type:"String" , maxLen:10}};
//var key=Object.keys(obj1);
//console.log(obj1[key[0]].constructor);
//console.log(key);
mon.ty(JSON.stringify(obj),JSON.stringify(obj1));