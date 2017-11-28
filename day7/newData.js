var mongoose =require('mongoose');
var promise = mongoose.connect('mongodb://localhost/mon1', {
  useMongoClient: true,
  /* other options */
});
var schema=mongoose.Schema;
var db=mongoose.connection;
var userSchema =new schema({
name:String,
password : {type: Number,required:true,unique:true}
});
var user =mongoose.model('up',userSchema);
module.exports=user
