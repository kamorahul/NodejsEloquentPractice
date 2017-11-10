
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/details4";

MongoClient.connect(url, function(err, db) {
if(err)
throw err;
db.createCollection("conicals",{validator:{
$and:[
{
"Firstname":
{
$type:"string",
required:true
}
},
{
"Lastname":
{
$type:"string",
required:true
}
},
{
"Details":
{
$type:"string",
required:true,
unique:true,
$regex:/^[0-9]$/
}
}
]
},

validationLevel:"strict"},function(err,col)
{
if(err)
 return callback(err);
module.exports.conicals=col;
});
console.log("schema done");
db.close();
});

