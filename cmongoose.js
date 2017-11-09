var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/siridb',{useMongoClient: true});
var db = mongoose.connection;
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var m1 = new Schema({
    name: { type: String, required: true},
    regno: Number,
    sem: Number,
    email: { type: String, match: /([a-z A-Z 0-9 . _]*@[a-z]*\.[a-z])/},
    phno: {type: Number, length: 10}
});

var m = mongoose.model('m',m1);
 var o = new m({name:"dinesh", regno:11406217, sem: 7, email:"dineshgmail.com", phno: 9872385582});//siri9686@gmail.com email must be in this format
o.validate(function(error){
console.log("error is:", error)

if(error){
console.log("error is there");
}
else{
console.log("data is stored")
db.collection('data').insert(o);}
});
console.log(o.name,o.regno,o.sem,o.email,o.phno);
