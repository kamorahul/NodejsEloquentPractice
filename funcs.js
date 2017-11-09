var MongoClient = require('mongodb').MongoClient , assert = require('assert')
var url = 'mongodb://localhost:27017/users'
var check={}
var data
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
module.exports=
{
  //---------------------------------------------------------------------
  connect:()=>{
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err)
      dbclose=db
      console.log("connected!!!")
    })
  },
  //---------------------------------------------------------------------
  schema:(constraint)=>{
    for(var i in constraint)
    {
      if(typeof constraint[i]!='object')check[i]=constraint[i]
      else module.exports.schema(constraint[i])
    }
  },
  //---------------------------------------------------------------------
  validate:(comparable)=>{
    for(i in check)
    {
      if(typeof check[i]!='object')if(typeof comparable[i]!=check[i])return false
      else module.exports.validate(comparable[i])
    }
  },
  //---------------------------------------------------------------------
  insert:(c_name,object)=>{
    var status=module.exports.validate(object)
    if(status!=undefined)return 'violating schema'
    else{
      MongoClient.connect(url, function(err, db) {
        assert.equal(null, err)
        //dbclose=db
        console.log("connected!!!")
        db.collection(c_name).insertOne(object,(error,result)=>{console.log('object inserted')})
        db.close();
      })
    }
  },
  //----------------------------------------------------------------------
  display:(c_name)=>{
    MongoClient.connect(url, function(err, db){
      assert.equal(null, err)
       var col = db.collection(c_name);
       col.find({}).toArray(function(err, docs) {console.log(docs)});
     db.close();
  })
  }
}
