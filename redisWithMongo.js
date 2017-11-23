


var redis=require("redis");
var client = redis.createClient();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/storeData';
//find all recored from database and give responce to client
//all data already store in database named "storeData" and collection name " person"

//first check record in redis
client.on("connect",(err)=>{    //1
    if(err) console.log(err);
    console.log("redis connected sucessfully");
    dataFind("ramnivas");
});

var setDataToRedis=(name,obj)=>{
    return new Promise((reject,resolve)=>{
        client.hmset(name,obj,(err)=>{
            if(err) reject(err);
            console.log("data set to redis")    
        })
        resolve("data from mongodb to redis set sucessfully")
    })
};

var dataFind= (name)=>{
        client.exists(name,(err,reply)=>{
            if(err) reject("error found");
            if(reply===1)
            {
                    console.log(name," type attribute is exist in redis ");
                    client.hgetall(name,(err,data)=>{
                    if(err) console.log(err);
                    console.log(data);
                })
            }else{   
                     datafromMongo(name).then(result=>{  
                        console.log("result",result)
                        if(result===-1)
                        {
                            console.log("name not find in database");
                        }
                        else{
                                console.log("data is storing to redis ",result)
                                return setDataToRedis(name,result).then(result=>{
                                    console.log(result+"12345");
                                }).catch(err=>{
                                    console.log(err);
                                })
                                
                        }
                    })
                 
        }
    
    })
}




var  datafromMongo= (name1)=>{ 
    return new Promise(function(resolve, reject) {
        MongoClient.connect(url, function(err, db) {

        var collection = db.collection('person');
        
        collection.find({name:name1},{name:1,_id:0,age:1,address:1}).toArray(function(err, items) {
          if (err) {
            reject(err);
          } else {
              if(items.length===0)
                resolve(-1);
            resolve(items[0]);
          }          
        });

      });
    });
}    
