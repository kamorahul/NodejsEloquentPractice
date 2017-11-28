var humanData=
 [
  {
   "name":"atif",
   "id":11404404,
   "age":21,
   "weight":60
  },
  {
   "name":"rahul",
   "id":11403966,
   "age":25,
   "weight":65
  } 
 ];

//var jsonObject=JSON.parse(humanData);
//getName(humanData[0].name);

function getHumanDetails(data){
var jsonObject=JSON.parse(data);
  /*function hasName(){
   console.log("Customer Name:"+jsonObject[0].name);
  }
 console.log("name is",jsonObject[0].name);
 console.log("age is",jsonObject[0].age); */

 for(var i=0;i<jsonObject.length;i++){
   getCustomerName(jsonObject[i].name);
   getCustomerName(jsonObject[i].id);
   getCustomerAge(jsonObject[i].age);
   getCustomerWeight(jsonObject[i].weight);
 }
 /*getCustomerName(jsonObject[0].name);
 getCustomerName(jsonObject[0].id);
 getCustomerAge(jsonObject[0].age);
 getCustomerWeight(jsonObject[0].weight);
 */
}

function getCustomerName(name){
   console.log("Customer Name:",name);
}
function getCustomerId(id){
  console.log("Customer id:",id);
}
function getCustomerAge(age){
   console.log("Customer Age :",age);
}
function getCustomerWeight(weight)
{
   console.log("Customer weight :",weight);
}
getHumanDetails(JSON.stringify(humanData));
