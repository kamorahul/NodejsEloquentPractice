
var Ajv = require('ajv');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/maatif";

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
function insert(collection,values) {
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
    
mongoose_collection("maatif",{ "properties": { "emp_name": { "type": "string" }, "department": { "type": "string" }, "emp_id":{ "type": "integer" } }, "required": ["emp_name","emp_id"] });
insert("maatif",{car_name:"Atif",model:"Backend",price:11404404});

