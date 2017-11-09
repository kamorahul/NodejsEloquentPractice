//schema created down
 function validate(schema,data){
    
    var sch_prop = schema.properties;
    
    var data_rev=schema.required;
    
    var attributes=Object.keys(sch_prop);
    
    var val_key = Object.keys(data);
    
    function contains(array, item) {
    
    for (var i = 0; i < array.length; i++) {``
    
    if (array[i] === item) {
    
    return true;
    
    }
    
    }
     
    return false;
    
    }
    
    //check for required fields
    
    for(var i=0;i<data_rev.length;i++){
    
    if(! contains(val_key,data_rev[i])){
    
    console.log("Required field is not entered");
    
    return false;
    
    }
    
    else if(data[data_rev[i]] == undefined){
    
    console.log("Required field is undefined");
    
    return false;
    
     
    
    } 
    
    }
    
    //check for extra data
    
    for(var i=0;i<val_key.length;i++){
    
    if(! contains(attributes,val_key[i])){
    
    console.log("You are entering extra field");
    
    return false;
    
    } 
    
    }
    
    //check data type
    
    for(var i=0;i<attributes.length;i++){
    
    var sch_field =sch_prop[attributes[i]];
    
    var sch_field_key=Object.keys(sch_field); 
    
    if(typeof data[attributes[i]]!=sch_field[sch_field_key[0]]){
    
    console.log("Incorrect Data Type"); 
    
    return false;
    
    } 
    
    }
     
    return true;
    
    }





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
                
                if(validate(cons,values)){
                    db.collection(user).insertOne(values, function(err, res) {
                        if (err) throw err;
                        console.log("1 User added");
                        db.close();  
                              
        
                    });
                }
                else{
                    console.log(" USER_Data is invalid");
                }
          
            }
        
    });
}


    

    
 
   //create("schema",{name:{type:string,required:true},age:{type:number,required:true}});
    insert("schema",{name:"abc",age:21});
