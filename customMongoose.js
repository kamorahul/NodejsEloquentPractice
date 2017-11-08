const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const url = "mongodb://localhost:27017/learning-mongo";

var customCollection = (collection,parameters)=> {
    MongoClient.connect(url, function(err, db) {
      var flag = db.createCollection(collection);
      if(flag){
        console.log("Collection created successfully!");
      }
    });
    fs.writeFileSync('./'+collection+'.json',JSON.stringify(parameters), 'utf8');
  };
var insert = (collection,data) =>{
    const customScema = require('./'+collection+'.json');
        MongoClient.connect(url,function(db, err){
            if(!err){
              var Ajv = require('ajv');
              var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
              var validate = ajv.compile(customScema);
              var valid = validate(data);
              if(valid){
                  db.collection(collection).insert(data, function(doc, err){
                        if(err){
                          console.error("Failed to insert")
                        }else{
                          console.log("The Document inserted is:",JSON.stringify(doc,undefined,2));
                        }
                  });
              }
            }

        });
  };

module.exports={
  customCollection,
  insert
};
