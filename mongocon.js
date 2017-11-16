var MongoClient=require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/Mongo",function(err,db){
if(err) throw err;
       db.collection("data",function(err,res){
       if (err) throw err;
              for(var a=0;a<500;a++)
               {
                    if(a%2==0)
                       {
                           for (var b=0;b<200;b++)
                             {
                                 collection.insert({name:"vikas"});
                             }
                       }
                    else
                       {
                            for(var c=0;c<200;c++)
                            {
                                   collection.insert({name:"kaloti"});
                            }
                       }
               }
               console.log("data inserted");
               console.log(res);
               db.close();
      });
});

