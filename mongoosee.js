//schema created down

function create (user,constrains) {
        var fs = require('fs');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/newMongo";
    
        fs.writeFile('./'+user+'.json',JSON.stringify(constrains), 
        function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.createCollection(user, function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
              });
             
        });
        
    }
    function insert (user,values) {
        var fs = require('fs');
        var cons=require('./'+user+'.json');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/newMongo";
        MongoClient.connect(url,function(err, db) {
            if (err) throw err;
            else{
                var Ajv= require('ajv');
                var ajv=Ajv({allErrors:true});
                var validate = ajv.compile(cons);
                if(validate(values)){
                    db.collection(user).insertOne(values, function(err, res) {
                        if (err) throw err;
                        console.log("1 User added");
                        db.close();  
                              
        
                    });
                }
                else{
                    console.log("invalid USER");
                }
          
            }
        
    });
}


    

    
 
   //create("schema",{"properties" : {"name" : {"type":"string"},"age" : {"type":"integer"}},"required":["name"]};
    insert("schema",{name:"abc",age:21});
