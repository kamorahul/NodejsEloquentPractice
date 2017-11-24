const hapi=require('hapi')
, server = new hapi.Server()
, redis = require('redis')
, red_client = redis.createClient()
, mon_client = require('mongodb').MongoClient;
//-----------------------------------------------------
server.connection({port:3001,host:'localhost'});
red_client.on('connect',()=>{console.log('redis connected!')});
server.start(err=>{if (err)throw err;console.log(`Hapi Server is live @ ${server.info.uri}`);})//starting server in happi
//-----------------------------------------------------
server.register(require('inert'),err=>{
    if (err)throw err;
    server.route({
        method: 'GET',
        path:'/',
        handler: function(request, reply){
            reply.file('./index.html');
        }
    });
    server.route({
        method: 'POST',
        path:'/productinfo',
        config:{
               payload:{output: 'data'}
                },
        handler:(request, reply)=>{
          var data=request.payload.product;
          if(data==null)return;
          red_client.hget('product',data,(error,reply)=>{if(error)throw error;
            if(reply!=null){console.log('the price of '+data+' is '+reply);return;}
              mon_client.connect("mongodb://localhost:27017/product",(err,db)=>
              {
                if(err)throw err;
                db.collection('product').find({name:data}).toArray((error,res)=>
                {
                  if(error)throw error;
                  console.log('the price of '+res[0].name+' is '+res[0].price);
                  red_client.hset('product',res[0].name,res[0].price,redis.print);
                })
              });
          });
          reply.file('./product.html');
          }

    });
});
