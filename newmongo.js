var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/data";
var collectionCreated=false;


function insert(mydata,Obj){

	var size=Object.keys(mydata).length;
	var keys=Object.keys(mydata);
	var Objkeys=Object.keys(Obj);
	var c=0;
	for(var i=0;i<size;i++)
	{
		if(!((typeof Obj[Objkeys[i]])==(mydata[keys[i]])||((typeof Obj[Objkeys[i]])=="number" && mydata[keys[i]]=="string")))
		{
			console.log(keys[i]);
		console.log(" Invalid data entered ");
		return;
		}
		else {
			c++;
	}
	}
	if(c==size)
{
		console.log("Data Inserted");
		console.log(Data);
	}
	MongoClient.connect(url,function(err,db){
		if (err) {throw err;}
		if (!collectionCreated) {
			db.createCollection('Mongo',function(err,res){
				if (err) {throw err;}
				collectionCreated=true;
			})
		}
		db.collection('Mongo').insertOne(Obj,function(err,res){
			if (err) {throw err;}
			else{
					db.close();
	}
		})
	})
}

var Schema={
	  "name":"string",
	  "gender":"string",
	  "regno":"number",
	  "phone":"number"
	};
var Data={
	name:"Nookesh",
	gender:'male',
	regno:11411163,
	phone:9182981411

	
}

insert(Schema,Data);