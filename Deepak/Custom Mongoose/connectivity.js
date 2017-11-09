var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
var mymongoose = require("./validation_layer");

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	else
	console.log('Connected with Mongo');

	var collection = db.collection('model1');
	
	var schema1={
	name:"PureString",
	age:"Number",
	dob:"Date"};

	var query1={
	name:"Deepak Chauhan",
	age:"23a",
	dob:"10-11-1996"};

	var chk=mymongoose.validate(schema1,query1);
	
	if(chk){
	console.log("Query Valid");
collection.insert(query1,function(err,result){
	if(err) throw err;
	else
   	console.log("Inserted");
	 });}
	else
	console.log("Invalid Syntax");

collection.find({}).toArray(function(err,docs){
	if(err) throw err;
	else{
	console.log("ResultSet:  ");
	console.log(docs);
	}
	});

	db.close();
});
