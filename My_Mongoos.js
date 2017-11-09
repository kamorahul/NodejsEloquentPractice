module.exports = {
    my_createCollection: function (col_name,constrains) {
        var fs = require('fs');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/treaning";
    
        fs.writeFile('./'+col_name+'.json',JSON.stringify(constrains), function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.createCollection(col_name, function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
              });
             
        });
        
    },
    my_insertData : function (col_name,values) {
        var fs = require('fs');
        var schema=require('./'+col_name+'.json');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/treaning";
        var app = require('./my_validation_lib.js');
        
        
        MongoClient.connect(url,function(err, db) {
            if (err) throw err;
            else{
                if (app.my_validation(schema,values)) {
                    db.collection(col_name).insertOne(values, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                      });
                  
                } else {
                  console.log('User data is INVALID!');
                }
            }
            
          }); 
          
        
    },
    my_find: function (col_name) {
        var fs = require('fs');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/treaning";
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.collection(col_name).find({}).toArray(function(err, result) {
              if (err) throw err;
              console.log(result);
              db.close();
            });
          }); 
            
    }
    
  };
  







