
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/storeData'

MongoClient.connect(url, function(err, db) {
    
            var collection = db.collection('person');
            
            collection.find({name:"ram"},{name:1,_id:0,age:1,address:1}).toArray(function(err, items) {
              if (err) {
                console.log(err);
              } else {
                  if(items.length===0)
                    console.log("data is not available in mongodb")
                    console.log(items[0]);
              }          
            });
        });


        //benchmark testing

        // ab -n 200 -c 100 http://localhost:27017/
        // This is ApacheBench, Version 2.3 <$Revision: 1706008 $>
        // Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
        // Licensed to The Apache Software Foundation, http://www.apache.org/
        
        // Benchmarking localhost (be patient)
        // apr_pollset_poll: The timeout specified has expired (70007)
        // Total of 79 requests completed