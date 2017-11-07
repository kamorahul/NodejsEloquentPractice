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
  db.collection('users').insertOne({
    Name:"Javaid",
    "Location":"Baramulla",
    "Age":23},(err,docs)=>{
      if(err){
        return console.log('unable to insert into users',err);
      }
      console.log(JSON.stringify('docs.ops',undefined,2));
      //console.log(docs.ops._id.getTimeStamp());
    });
    db.close();
});
