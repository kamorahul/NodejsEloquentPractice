var fs = require('fs');
var Ajv = require('ajv');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/abdul_jugnoo";

function mongoose_collection(collection,constrains) {
    
        fs.writeFile('./'+collection+'.json',JSON.stringify(constrains), function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.createCollection(collection, function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
              });
             
        });
        
}
function mongoose_insert(collection,values) {
    var schema=require('./'+collection+'.json');
    MongoClient.connect(url,function(err, db) {
        if (err) throw err;
        else{
            var ajv = Ajv({allErrors: true});
            var validate = ajv.compile(schema);
            //console.log(validate);
            if (validate(values)) {
                db.collection(collection).insertOne(values, function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
                  
                } else {
                  console.log('User data is INVALID!');
                }
            }
            
    }); 
        
}
    
//mongoose_collection("abdul",{ "properties": { "car_name": { "type": "string" }, "model": { "type": "string" }, "price":{ "type": "integer" } }, "required": ["car_name","price"] });
mongoose_insert("abdul",{car_name:"Audi",model:"A8",price:8000000});