var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoDB, {useMongoClient: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var schema1 = new Schema({
    name: String,
    age: Number
});

var collection = mongoose.model('models', schema1 );

/*var document = new collection({ name: 'Pankaj',age:15 });

document.save(function (err) {
  if (err) console.log("Something's Wrong In Systax Bro!!");
  else console.log("saved!");
});*/

collection.
	find()/*.
	where('sport').equals('Tennis').
	where('age').gt(17).lt(50).
	limit(5).
	sort({ age: -1 }).
	select('name age')*/.
	exec((err,result)=>{
	if(err)
	console.log("Something's Wrong Bro!!");
	else{
	console.log(result);
	db.close();}});
