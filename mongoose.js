var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dineshDatabase", {useMongoClient: true});
var con = mongoose.connection;
mongoose.Promise = global.Promise;
 ///*
var Schema = mongoose.Schema;
var personSchema = new Schema({
  name   : {type: String, required: true},
  age    : {type: Number},
  gender : {type: String, enum: ['male','female']},
  mobile : {type: Number,length: 10,required: true},
  email  : {type: String, match: /([a-z 0-9 . _]*@[a-z]*\.[a-z]*)/},
  work   : {type: String }

});
var Person = mongoose.model('Person',personSchema);
//----------------------------------------------------------------------------------------------------------------------------
var ax = new Person({name:"Dinesh",age: 20, gender: 'male',mobile: '98790879870',email:"dinesh3@gmail.com",work: "Intern" });               //.validate(function(error){console.log("Error:",error)});
//----------------------------------------------------------------------------------------------------------------------------
ax.validate(function(error){ console.log("Error:",error);
if(!error){
   console.log("Details entered into Database");
   con.collection('mongo').insert(ax);}
else
   console.log("\nError in details...check and try again!");
 });
