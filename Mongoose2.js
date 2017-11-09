var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MongoDatabase";
var fs = require('fs');
var collectionCreated=false;


function insertData(myjson,inObj){

	var size=Object.keys(myjson).length;
	var keys=Object.keys(myjson);
	var keysinObj=Object.keys(inObj);
	var c=0;
	for(var i=0;i<size;i++)
	{
		if(!((typeof inObj[keysinObj[i]])==(myjson[keys[i]])||((typeof inObj[keysinObj[i]])=="number" && myjson[keys[i]]=="string")))
		{
			console.log(keys[i],"is not matched with schema");
			console.log("\n So data not inserted");
			return;
		}
		else {
			c++;
		}
	}
	if(c==size)
	{
		console.log("Data Inserted");
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

var Schema={
	  "name":"string",
	  "id":"number",
	  "gender":"string",
	  "regno":"number"
	};
var Data={
	name:"Vishal",
	id:11411800,
	gender:'male',
	regno:123456
}

//insertSchema(passJson);
insertData(Schema,Data);
