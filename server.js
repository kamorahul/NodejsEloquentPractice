const Hapi = require('hapi');
const redis = require('redis');
const client = redis.createClient();

client.on('connect', function(){
  console.log('Connected to Redis...');
});

const server = new Hapi.Server();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/treaning";

server.connection({
   host : 'localhost',
   port : 3001
});

server.register(require('inert'), (err) => {
    
        if (err) {
            throw err;
        }
    
        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply.file('./public/form.html');
            }
        });
        
        server.route({
            method: 'POST',
            path: '/search_process',
            config: {
                payload: {
                    output: 'data'
                }
            },
            handler: async function (request, reply) {
                var data=request.payload.name;
                client.lrange(data, 0, -1, function (error, items) {
                    if (error) throw error;
                    
                    else if(items.length!= 0 ) {
                        console.log("Data from rediss");
                        reply(items);  
                    }
                    else{
                        MongoClient.connect(url, function(err, db) {
                            if (err) throw err;
                            console.log("Searching DataBase");
                            db.collection('emp_test').find({name:data}).toArray(function(err, result) { 
                              if (err) throw err;
                             
                              else if(result.length!=0){
                                   
                                result.forEach(function (item){
                                    client.rpush(data, JSON.stringify(item)
                                       , function(err, reply){
                                        if(err) console.log(err);
                                        console.log("Data added to redis");
                                        
                                    });
                                  });
                                 
                                  reply(result);
                              }
                              else reply("Not found user ");
                          
                            });
                        }); 
                        

                    }        
                       
                     
                });
                
                
           
            }
        });    

});


server.start(function (err) {
   if(err){
       throw err;
   }      
   console.log('Server started at: '+server.info.uri);  
});