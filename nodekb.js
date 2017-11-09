var fs = require('fs');
//var Ajv = require('ajv');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/abdul_jugnoo";

function validate(value1,value2){
    var val1_prop = value1.properties;
    var val1_req = value1.required;
    var key_prop = Object.keys(val1_prop);
    var data_key = Object.keys(value2);
    
    function contains(arr,value)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]==value)
            return true;
        }
        return false;
    }
    for(var i=0;i<val1_req.length;i++)
    {
        if(!contains(data_key,val1_req[i]))
        {
            return false;
        }
        else if(value2[val1_req[i]]== undefined)
        {
            return false;
        }
        
    }
    for(var i=0;i<data_key.length;i++)
    {
        if(!contains(key_prop,data_key[i]))
        {
            return false;
        }
    }
    for(var i=0;i<key_prop.length;i++)
    {
        var field = val1_prop[key_prop[i]];
        var field_key = Object.keys(field);
        if(typeof value2[key_prop[i]]!=field[field_key[0]])
        {
            return false;
        }
    }

    return true;
    

}

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
            
            //console.log(validate);
            if (validate(schema,values)) {
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
    
//mongoose_collection("abdul",{ "properties": { "car_name": { "type": "string" }, "model": { "type": "string" }, "price":{ "type": "number" } }, "required": ["car_name","price"] });
mongoose_insert("abdul",{car_name:"Audi",model:"A8",price:8000000});