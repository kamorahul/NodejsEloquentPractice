var redis = require('redis');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shivam";

for(var i=0;i<2;i++){

var port =6379;
var host="127.0.0.1";
var client = redis.createClient(port, host);

//client.on('connect', function() {
//    console.log('connected');
//client.set('frameworks', 'nodejs')
//client.rpush(['fr','angular','beuwb'],(err,re)=>{
//console.log(re)

//});
//client.lrange('frameworks', 0, -1, function(err, reply) {
  //  console.log(reply); // ['angularjs', 'backbone']
//});
//});
//client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

//client.hgetall('frameworks', function(err, object) {
// console.log(object);
//});

//client.lrange('frameworks', 0, -1, function(err, reply) {
  //  console.log(reply); // ['angularjs', 'backbone']
//});
var search="shivam"
client.on('connect', function() {
	client.get(search, function(err, reply) {
   if(reply===null){
  //  console.log("bi");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("first").find({name:search}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result)
    client.set(search,result)
    db.close();
});
});
   }
   	else{
   //   console.log("hi");
 client.get(search, function(err, reply) {
    // reply is null when the key is missing 
    console.log(reply);
});
}
});
});
}


/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.collection("first").find({name:search}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
});
});
/*

var redis = require('redis');
for(var i=0;i<=2;i++){
var port =6379;
var host="127.0.0.1";
var client = redis.createClient(port, host);

client.on('connect', function() {
client.get("search", function(err, reply) {

if(reply===null){
    console.log("bi"+reply);
    client.set("search","pp")
client.end(true);
}else{
 console.log("hi");

}

})


})

}*/