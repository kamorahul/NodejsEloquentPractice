var MongoClient = require('mongodb').MongoClient,
 format = require('util').format;

var myMongoose = require('./myMongoose');

var url = 'mongodb://127.0.0.1:11112/mydb';
MongoClient.connect(url, function (err, db) {
    if (err)
        console.log(err);

        var myFriendCollection = db.collection('friends');

    var userSchema = {
        fname:{
            type: "String",
            minSize: 1,
            maxSize: 20
        },
        lname: {
            type: "String",
            minSize: 0,
            maxSize: 20
        },
        age: {
            type: "Number",
            minSize: 1,
            maxSize: 3
        },
        email: {
            type: "String",
            reg: /\S+@\S+\.\S+/,
            minSize: 1,
            maxSize: 40
        },
        password:{
            minSize: 8,
            maxSize: 16,
            type: "String",
            reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/,
        },
        required: ["fname", "lname", "email", "password"],
        unique: ["email"],
        regExp : ["email","password"]
    };

    var userData = {
        fname:"reyaz",
        lname:"mir",
        age:22,
        email: "mirreyaz1111@gmail.com",
        password: "Rehaaaaa2*"
    };

    var dbData = []

    myFriendCollection.find({}).toArray(function(err, res){
        if(err){
            throw err;
        }else{ 
            var response = myMongoose.mongoozee(myFriendCollection, res, userData, userSchema);
            if(response===""){
                insertData(myFriendCollection,userData);  //insert data into database      
            }else{
                console.log(response)
            }
            
        }
        db.close(); 
     });


          //calling custom functions to do insert, find, delete and update operations...
        // findData(myFriendCollection, {fname:"javaid"});     //find from db
        // deleteData(myFriendCollection, myFriendCollection.findOne({},{_id:true}));  //delete data from db
        // updateData(myFriendCollection, {name:"reyaz"}, {fname:"reyaz",mname:"ahmad", age:"22"});        //update data into db
        
        
});




var insertData = function(collection, data){

    collection.insert(data,function(err, res){
        if(err){
            throw err;
        }else{
            console.log(res.insertedCount+" records inserted")
        }
     });
}

var findData = function(collection, data){
    collection.find(data).toArray(function(err, res){
        if(err){
            throw err;
        }else{
            if(res.length === 0){
                console.log("Provided data does not match any document")
            }else{
                console.log(res)
            }
        }  
     });
}
var deleteData = function(collection, data){
    collection.deleteOne(function(err, res){
        if(err){
            throw err;
        }else{
            if(res.result.n < 1){
                console.log("Provided data does not match any document")
            }else{
                console.log(res.result.n+" document deleted")
            }
        }
    })
}
var updateData = function(collection, data, updated){
    collection.updateOne(data, updated, function(err, res) {
        if (err) throw err;


        if(res.result.n < 1){
            console.log("Provided data does not match any document")
        }else{
            console.log(res.result.n+" document updated")
        }
    });
}