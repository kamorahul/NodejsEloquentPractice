var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shivam12";
var q=1;
var n={};
function phoneCheck(a){

  if(a.constructor==Number && a.toString().length==10)
  {
   //console.log("ha");
  return 1;
  }else
  {
   //console.log("nahi ha");
    return 0;
  }
}
function comSubType(a,b){


  if(a.constructor==Array && !b.localeCompare("Array"))
  {
  //console.log("ha");
 return 1
 }
  else if(a.constructor==Number && !b.localeCompare("Number"))
  {
//console.log("ha");
 return 1;
  }else if(a.constructor==Boolean && !b.localeCompare("Boolean"))
  {
//console.log("ha");
  return 1;
  } else if(a.constructor==String && !b.localeCompare("String"))
  {
//console.log("ha");
return 1
  } if(a.constructor==Object && !b.localeCompare("Object"))
  {
//console.log("ha");
return 1
  }if(b.match(/RegExp.*/g))
  {
    var rep=b.replace('RegExp-','');


    var ma=new RegExp(rep);
    if(ma.test(a)){
     // console.log("ha")
       return 1
      }else
    {
    //  console.log("nahi ha");
      return 0;
    }
  }
  else{
      //console.log("Nahi ha");
      return 0
  }

}
module.exports={
  ty:function typeC(obj,obj1){
   var n=JSON.parse (obj);
   var p=JSON.parse(obj1);
   var keys=Object.keys(n);
   var q=1;
   for(var i=0;i<Object.keys(n).length;i++)
   { 
    if(p[keys[i]].localeCompare("Phone"))
      q= comSubType(n[keys[i]],p[keys[i]])
     else{
        q =phoneCheck(n[keys[i]]);
     }  

     if(q==0)
      break;   


//console.log(q);
}

 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
 if(q==1){
   db.collection("custom").insert(n, function(err, res) 
    {if (err) throw err;
    //console.log( "inserted");
     });}
   db.close();
});


     /* else if(((typeof n[keys[i]])==p[keys[i]])==false)
      {
     console.log("data type not allowed");
      
      q=1;
      break;
      }*/
  }
  };