var input = require('./info.json');
var schema = require('./schema.json');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:1000/mydb';
var mongo = function(url){
    MongoClient.connect(url, function(err,db){
    if (err)
        throw err;
    db.createCollection("myinfo").insert(input, function(err, res){
        if (err) throw err;
        console.log("data successfully inserted");
    });
    db.collection("myinfo").find({}).toArray(function(err, result){
        if (err) throw err;
        console.log(result);
    });
    db.close();
});
}

var keyInput = Object.keys(input);
var keySchema = Object.keys(schema);

if(keySchema.length>=keyInput.length){
    for(var i=0;i<keySchema.length;i++){
        var data = input[keyInput[i]];
        data = String(data);
        var regExp = schema[keySchema[i]]["type"];
        regExp = new RegExp(regExp);
        if(regExp.test(data)==false){
            console.log("Did not match");
            break;
        }
        if(i==(keySchema.length-1)){
            mongo(url);
        }
    }

}
else{
    console.log("Does not match the schema");
}
//this......
