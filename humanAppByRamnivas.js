var human=function(obj)
{
  // var argument=arguments;
  // return function(){
  //   return argument;
  //
  // }

return function(){
 var result=" ";
 if(obj.name===undefined)
 {
  return  function(){ return "Human can't be created because Name is not available\n";}
 }else {

   console.log("Human created\n");
  for(var key in obj)
  {

    var value=obj[key];
    result += " "+key +"  : " +value+"\n ";
  }
      return function(){return result;}
}
}
}
var object1={//name:"Ram",
            dob:"30/06/1993",height:164,weight:65,
            isOrphan:false,
            isBlind:true
            }
var object2={name:"Ram",
              dob:"30/05/1998",height:82,weight:75,
                isOrphan:true,
                isBlind:false
                    }


var createHuman=human(object2);
console.log(createHuman()());

console.log("human 2-----------------------------------------------------");
var createHuman=human(object1);
console.log(createHuman()());
