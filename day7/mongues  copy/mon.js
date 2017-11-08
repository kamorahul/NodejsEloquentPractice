

module.exports={ty:function typeC(obj,obj1){
   var n=JSON.parse (obj);
   var p=JSON.parse(obj1);
   var keys=Object.keys(n);
   for(var i=0;i<Object.keys(n).length;i++)
   {  console.log((typeof n[keys[i]])==p[keys[i]]);
  
   }

}
};