var mongoose = require('mongoose');
 var assert =require('assert');
 var x= require('./Schema.js');
 mongoose.Promise = global.Promise;
 var mongoDB = 'mongodb://127.0.0.1/my';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
//Get the default connection
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error hai bhai'));
db.on('open',function(){
	console.log("conncted bhai");
});
var mytopic=x({
	topic:Git,
	description:' Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.'
});
mytopic.save(function(err){
	if(err) throw err;
	
	x.find({},function(err,resultdata){
		if(err) throw err;
		console.log(resultdata);
		console.log("bhai dekho Data is inserted");
	});
});