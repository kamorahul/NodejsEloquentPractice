const Hapi = require('hapi');
const redis = require('redis');
const client = redis.createClient();

client.on('connect', function(){
  console.log('Connected to Redis...');
});

const server = new Hapi.Server();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/redis";

server.connection({
   host : 'localhost',
   port : 3333
});

server.register(require('inert'), (err) => {    
        if (err) {
            throw err;
        }
        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply.file('./public/ser.html');

                  client.lpush("Name","Nitesh Raj",redis.print,function(error,info){
                    if (error) throw error;
                        console.log("Data from rediss \t " + info);
                       // reply(info);  

                });


                 client.hgetall("key", function (err, replies) {  
                  console.log("DATA IN KEYS ARE \n",replies);

                      });
            }
        });
        
        server.route({
            method: 'POST',
            path: '/search',
            handler: async function (request, reply )
            {
               
                // client.hset("key", ["Name", "Vikas Ayan"], redis.print,function(error){
                //     if (error) throw error;
                //         console.log("Data from rediss");
                //         reply(Name);  

                // });

                // client.lpush("Name","VIKAS SINGH",redis.print,function(error,info){
                //     if (error) throw error;
                //         console.log("Data from rediss");
                //         reply(info);  

                // });

            client.hvals("key", function (err, replies) {  
             console.log(" VALUES ARE \n",replies);
   
                 });


                client.hgetall("key", function (err, replies) {  
                  console.log("DATA IN KEYS ARE \n",replies);

                      });


                // client.hdel("key", function (err, replies) { 
                //  console.log("Deleted DATA IN KEYS ARE \n",replies);
                //  client.quit();
                //      });

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/redis";

                 MongoClient.connect(url, function(err, db) {
                            if (err) throw err;
                            console.log("Searching DataBase");
                            db.collection('red1').find({key:"Name"}).toArray(function(err, result) { 
                
                                    client.lpush("Name","Avinash Pandey",redis.print,function(error,data){
                                 if (error) throw error;
                                    console.log("Data inserted ");
                                   reply(data);  

                                });
                                  });
                                  reply(result);         
                            }); //mongo end

                }

 });

server.start(function (err) {
   if(err){
       throw err;
   }      
   console.log('Server started at: '+server.info.uri);  
}); 
});