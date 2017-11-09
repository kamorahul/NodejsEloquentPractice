var input = require('./input.json');
var schema = require('./schema.json');

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mydb';

var myMongo = (url)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        db.collection("myCollection").insert(input,()=>{
            console.log("Data successfully inserted");
        });
        db.collection("myCollection").find({}).toArray((err,abc)=>{
            console.log(abc);
        });
        db.close();
    });
}
var keyInput = Object.keys(input);
var keySchema = Object.keys(schema);

if(keySchema.length>=keyInput.length){
    for(var i=0;i<keySchema.length;i++){
        var inp = input[keyInput[i]];
        inp = String(inp);
        var regExp = schema[keySchema[i]]["type"];
        regExp = new RegExp(regExp);
        if(regExp.test(inp)==false){
            console.log("Did not match");
            break;
        }
        if(i==(keySchema.length-1)){
            myMongo(url);
        }
    }

}
else{
    console.log("Does not match the schema");
}

