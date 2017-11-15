var MongoClient=require('mongodb').MongoClient;
var myjson=require('./myjson.json');
var url = "mongodb://localhost:27017/MongoDatabase";

var size=Object.keys(myjson).length;
var keys=Object.keys(myjson);

var collectionCreated=false;
function insertData(inObj){
	var keysinObj=Object.keys(inObj);
	for(var i=0;i<size;i++)
	{
		if(!((typeof inObj[keysinObj[i]])==(myjson[keys[i]])||((typeof inObj[keysinObj[i]])=="number" && myjson[keys[i]]=="string")))
		{
			console.log(keys[i],"is not matched with schema");
			console.log("\n So data not inserted");
			return;
		}
	}
	MongoClient.connect(url,function(err,db){
		if (err) {throw err;}
		if (!collectionCreated) {
			db.createCollection('Mongoose1',function(err,res){
				if (err) {throw err;}
				collectionCreated=true;
			})
		}
		db.collection('Mongoose1').insertOne(inObj,function(err,res){
			if (err) {throw err;}
			else{
					db.close();
			}
		})
	})
}
insertData({name:"Vishal",id:"11411800",gender:'male'});
