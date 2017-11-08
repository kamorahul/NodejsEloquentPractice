// creating a anonymous function
 var createAnny=function(name,gender,age,dob,natlty)
 {
   return function()
   {
   console.log("name:" +name);
   console.log("gender:" +gender);
   console.log("age:" +age);
   console.log("dob:" +dob);
   console.log("nationality:" +natlty);
   }
 }
 var a=createAnny("anchal","female",21,"23 feb","Indian"); //function in array format

 var p={"name":"akhil","gender":"male","age":22,"nationality":"Indian"}; // jason format having key:attribute
 console.log(p["name"]);
 console.log(" ");

 console.log(Object.keys(p));
 //console.log(Object.values(p));
 console.log("");

 console.log(a());
 console.log(" ");
// two ways of getting output
 var x=a();
 console.log(x);
