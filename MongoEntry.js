var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MongoDatabase";
var j=0;
MongoClient.connect(url,(err,db)=>{
  for(var i=1;i<=100000;i++)
  {
    var Person={value:j};
    {
      if(i%200==0)
      {
        j++;
      }
        db.collection("data").insertOne(Person,(err)=>{
            console.log(i,"inserted");
        });
     }
  }
  db.close();
})
