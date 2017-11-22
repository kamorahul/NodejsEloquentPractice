var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	else
	console.log('Connected with Mongo');

	var collection = db.collection('model1');
	
collection.insert(query1,function(err,result){
	if(err) throw err;
	else
   	console.log("Inserted");
	 });}

collection.find({}).toArray(function(err,docs){
	if(err) throw err;
	else{
	console.log("ResultSet:  ");
	console.log(docs);
	}
	});

	db.close();
});
