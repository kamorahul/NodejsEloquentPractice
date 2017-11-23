//benchmark testing


// ab -n 200 -c 100 http://localhost:6379/
// This is ApacheBench, Version 2.3 <$Revision: 1706008 $>
// Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
// Licensed to The Apache Software Foundation, http://www.apache.org/

// Benchmarking localhost (be patient)
// Completed 100 requests
// Completed 200 requests
// Finished 200 requests


// Server Software:
// Server Hostname:        localhost
// Server Port:            6379

// Document Path:          /
// Document Length:        0 bytes

// Concurrency Level:      100
// Time taken for tests:   0.119 seconds
// Complete requests:      200
// Failed requests:        0
// Total transferred:      10000 bytes
// HTML transferred:       0 bytes
// Requests per second:    1683.93 [#/sec] (mean)
// Time per request:       59.385 [ms] (mean)
// Time per request:       0.594 [ms] (mean, across all concurrent requests)
// Transfer rate:          82.22 [Kbytes/sec] received

// Connection Times (ms)
//               min  mean[+/-sd] median   max
// Connect:        1    2   1.1      2       5
// Processing:     7   55  45.9    100     103
// Waiting:        1    2   1.0      2       5
// Total:         12   57  45.1    101     104

// Percentage of the requests served within a certain time (ms)
//   50%    101
//   66%    102
//   75%    102
//   80%    102
//   90%    103
//   95%    104
//   98%    104
//   99%    104
//  100%    104 (longest request)



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