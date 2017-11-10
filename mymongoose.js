var MongoClient = require('mongodb').MongoClient 
var assert = require('assert')
var url = 'mongodb://localhost:27017/mongo'
var inspect={}
var data

module.exports=
{
  connect:()=>{
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err)
      dbclose=db
      console.log("succesfully connected!!!")
    })
  },
  

  //schema
  
  schema:(c)=>{
    for(var i in c)
    {
      if(typeof c[i]!='object')inspect[i]=c[i]
      else module.exports.schema(c[i])
    }
  },
  
  //validate
  
  validate:(x)=>{
    for(i in inspect)
    {
      if(typeof inspect[i]!='object')if(typeof x[i]!=inspect[i])return false
      else module.exports.validate(x[i])
    }
  },
  
  //insert
  
  insert:(name,object)=>{
    var status=module.exports.validate(object)
    if(status!=undefined)
      return 'invalid'
    else{
      MongoClient.connect(url, function(err, db) {
        assert.equal(null, err)
        console.log("connected successfully!!!")
        db.collection(name).insertOne(object,(error,result)=>{
          console.log(' inserted')})
        db.close();
      })
    }
  },
  
  // display

  display:(name)=>{
    MongoClient.connect(url, function(err, db){
      assert.equal(null, err)
       var col = db.collection(name);
       col.find({}).toArray(function(err, docs) {console.log(docs)});
     db.close();
  })
  }
}