var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/ass",function(err,db){
db.collection('entry',function(err,collection){
for(var j = 1; j <= 500; j++){
if(j%2 == 0){
for (var i = 1; i <= 200; i++){
collection.insert({"name":"siri","used":i,"multi":j,"form":"january","end":"december","year":2017});
}}
else
{for(var k = 1; k <= 200; k++){collection.insert({"name":"venni","used":k,"multi":j});}
}
}
db.collection('entry').count(function(err,count){
if(err) throw err;
console.log("No.of times user opened the server",count);
db.close();
});
});
});
