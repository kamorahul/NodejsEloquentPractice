var mongoose = require('mongoose');

var promise = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
});
var catSchema=new mongoose.Schema({
  name:String,
  age:Number,
  temperament:String
});
var Cat=mongoose.model("Cat",catSchema);
// insert data ............
 var george=new Cat({
  name:"aaa",
  age:15,
  temperament:"evil"
});


george.save(function(err,Cat)
{
  if(err)
  {
    console.log("error");
  }
  else
    {
      console.log("done");
      console.log(Cat);
    }
  });


//insert data in one step ............
Cat.create({
  name:"asd",
  age:15,
  temperament:"asdf"
},function(err,cats) {
  if(err)
  {
    console.log("err");
    console.log(err);
  }

else
{
  console.log("all cats");
  console.log(Cat);
}
});


  //retrve data from database ......
  Cat.find({},function(err,cats){
    if(err)
    {
      console.log("err");
      console.log(err);

    }
    else {
      {
        console.log(cats);
      }
   }
  });
