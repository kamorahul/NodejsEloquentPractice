var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url ='mongodb://localhost:27017/mongoosedb';
// input json file
var json = {name:"murali" ,age:20,college:"lpu"}

var temp = 0;
var nametemp = 0,agetemp = 0, collegetemp = 0;
var final = function (jsonFinal){
                    if(jsonFinal.name == "" )
                    {
                            nametemp = 0;
                            console.log("Name should not be empty");
                    }
                     if (/[a-zA-Z]/.test(jsonFinal.age)) {
                               agetemp = 0;
                               console.log("Age should not be string");
                    }
                    if(nametemp==1 && agetemp == 1){
                      console.log("File is ok");
                      var namecheck = 0;
                      var t = {};
                      MongoClient.connect(url,function(err,db){
                      assert.equal(err,null);
                      console.log("connected with db");
                    var collection = db.collection('mongoosecollection2');
                  collection.find({}).toArray(function(err,doc){
                   console.log(doc);
                   var t = doc;
                   passDoc(t);
                    });
                  var passDoc = function( t)
                  {
                  //Getting number of files in collection
                  for(k in t)
                  {
                  k++;
                  }
                  //  console.log(k);
                  //checking is name is unique
                  for(var j=0;j<k;j++)
                  {
                        if(t[j].name==jsonFinal.name)
                        {
                        namecheck++;
                        }
                  }
                      if(namecheck==0)
                            {
                              collection.insert({name:jsonFinal.name,age:jsonFinal.age,college:jsonFinal.college},function(err,result){
                              assert.equal(err,null);
                              console.log("Inserted");
                              collection.find({}).toArray(function(err,docs){
                                assert.equal(err, null);
                               console.log(docs);
                                  });
                                  });
                            }
                  else {
                              console.log("name already exists");
                       }
                  }
                  });
                    }
}

for(k in json)
{
temp++;
}
if(temp<=3)
{
  var checkKeys = 0;
                for(k in json)
                {
                          if(k== "name")
                          {
                          //  console.log("name key ok");
                            nametemp = 1;
                            checkKeys++;
                          }
                          if(k=="age")
                          {
                        //    console.log("age key ok");
                            agetemp=1;
                            checkKeys++;
                          }
                          if(k=="college")
                          {
                        //    console.log("college key ok");
                            collegetemp = 1;
                            checkKeys++;
                          }
                }
                if(checkKeys==temp)
                {
                            if(nametemp == 1 && agetemp == 1 && collegetemp == 1)
                            {
                                    final(json);
                            }
                              else{

                                            if (nametemp == 0)
                                            {
                                              console.log("No name key in ur file");
                                            }
                                            if(agetemp == 0)
                                            {
                                              console.log("No age key in ur file");
                                            }
                                            if(collegetemp == 0)
                                            {
                                              console.log("No College key in ur file");
                                              json1 = {name:json.name,age:json.age,college:"Not Mentioned"}
                                            final(json1);
                                            }
                                 }
               }
      else {
                 console.log("You are entering invalid Keys");
           }
}
else{
        console.log("Invalid File");
    }
