const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017/todoApp';
MongoClient.connect(url,(err,db)=>{
  // const user = {name:"Javaid",age:22,Designation:"Intern"};
  // var {name} = user;                                    //object destructuring Ecma6 concept
  // console.log(name);


  if(err){
    return console.log("connection not created!");
  }
  console.log("collection created successfully!");
  db.collection('users').find().toArray().then((docs) =>{
    console.log("Users");
    console.log(JSON.stringify(docs,undefined,2))},err =>{
      console.log("data not fetched!");

  });
    db.close();
});
