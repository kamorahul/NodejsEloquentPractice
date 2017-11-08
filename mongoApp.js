var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
var url = 
MongoClient.connect('mongodb://127.0.0.1:11112/mydb', function (err, db) {
    if (err)
        throw err;
        var myFriendCollection = db.collection('friends');
        var friendsArray = [{fname:"javaid",mname:"ahmad",lname:"ganaie",age:"24",hq:"mca",},
                            {fname:"javaid",mname:"ahmad",lname:"ganaie",age:"24",hq:"mca",},
                            {fname:"javaid",mname:"ahmad",lname:"ganaie",age:"24",hq:"mca",},
                            {fname:"javaid",mname:"ahmad",lname:"ganaie",age:"24",hq:"mca",}]



          //calling custom functions to do insert, find, delete and update operations...
        insertData(myFriendCollection,friendsArray);        //insert into db
        findData(myFriendCollection, {fname:"javaid"});       //find from db
        deleteData(myFriendCollection, myFriendCollection.findOne({},{_id:true}));  //delete data from db
        updateData(myFriendCollection, {name:"reyaz"}, {fname:"reyaz",mname:"ahmad", age:"22"});        //update data into db
        
        db.close();
});

var insertData = function(collection, data){
    collection.insertMany(data,function(err, res){
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