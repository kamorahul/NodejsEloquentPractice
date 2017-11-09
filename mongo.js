var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/myapp', {useMongoClient: true });
//const Promise=global.Promise

 var idSchema=new mongoose.Schema
 ({name:String,age:Number,nature:String});

 var identity=mongoose.model("identity",idSchema);


 // insert data ............
  var a=new Cat({name:"abc",age:10,nature:"evil"});

 a.save(function(err,identity)
 {
   if(err)
   {
     console.log("error");
     console.log(err);
   }
   else
     {
       console.log("done");
       console.log(identity);
     }
   });



  //retrve data from database ......
  Cat.find({},function(err,identity)
  {
     if(err)
     {
       console.log("err");

     }
     else {
       {
         console.log(identity);
       }
   }
  });
