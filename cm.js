
    function create_collection (collection,constrains) {
        var fs = require('fs');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/aks";
    
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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    function  insertdata (collection,values) {
        var fs = require('fs');
        var schema=require('./'+collection+'.json');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/aks";
        
        
        MongoClient.connect(url,function(err, db) {
            if (err) throw err;
            else{
                if (validate_data(schema,values)) 
                {
                    db.collection(collection).insertOne(values, function(err, res) {
                        if (err) throw err;
                        console.log("record inserted");
                        db.close();
                                                        });
                  
                } 
                else 
                {
                  console.log('INVALID DATA!!!');
                }
            }
            
          }); 
          
        
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   function find_records (collection) {
        var fs = require('fs');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/aks";
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.collection(collection).find({}).toArray(function(err, result) {
              if (err) throw err;
              console.log(result);
              db.close();
            });
          }); 
            
    }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

   function validate_data (schema,data){
        var s_details = schema.properties;
        var data_d=schema.required;
        var attributes=Object.keys(s_details);
        var val_key = Object.keys(data);
        function contains(array, item) {
            for (var i = 0, ln = array.length; i < ln; i++) {
                if (array[i] === item) 
                {
                    return true;
                }
            }

            return false;
        }
        //FUNCTION TO CHECK FOR REQUIRED FIELDS
        for(var i=0;i<data_d.length;i++)
        {
           if(! contains(val_key,data_d[i]))
           {
               console.log("KINDLY ENTER ALL THE REQUIRED FIELDS");
               return false;
           }
           else if(data[data_d[i]] == undefined)
           {
              console.log("REQUIRED FIELD CAN'T BE UNDEFINED");
              return false;
            
           }   
        }
         //FUNCTION TO CHECK FOR EXTRA DATA
        for(var i=0;i<val_key.length;i++)
        {
           if(! contains(attributes,val_key[i]))
           {
              console.log("EXTRA FIELD DATA RECIVED!!!");
              return false;
           }   
        }
        ///FUNCTION TO VERIFY DATA TYPE
        for(var i=0;i<attributes.length;i++)
        {
           var sch_field =s_details[attributes[i]];
           var sch_field_key=Object.keys(sch_field);  
           if(typeof data[attributes[i]]!=sch_field[sch_field_key[0]])
           {
            console.log("PLEASE ENTER DATA IN REQUIRED DATA TYPE"); 
              return false;
           }         
        }

        return true;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Below 3 statments should be executed one at a time.
  
  
  
 create_collection("xyz",{ "properties": { "name": { "type": "string" }, "regno":{ "type": "number"}, "address": { "type": "string"},"mobile": { "type": "number"},"cgpa": { "type": "number"}}, "required": ["regno","name"] });
//insertdata("xyz",{name:"ajeet",regno:1140,address:"chandigarh",mobile:9999999999,cgpa:8.2});
//find_records("xyz");



 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

