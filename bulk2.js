var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',function(err,db)  {
  if (err) throw err;
  var count=0;
console.log("hi dude wait for few seconds");
  for(var i=0;i<100000;i++)
  {
  var myobj = [{"name":"kasu","age":21,"address":"hyd"}];
    if(i%100==0)
    {
       count++;
   
    }
  db.collection("love").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    });
  }
    db.close();
});