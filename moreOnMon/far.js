module.exports={
  foo:function farJas(obj,obj1){//obj user value & obj1 user scema;
//console.log(obj);
var keys=Object.keys(obj1);
//   console.log(obj);
   for(var i=0;i<keys.length;i++)
   {
   		switch(keys[i])
   			{
   				case "type":
                {
   					 		if(obj.constructor=="String"){
                  console.log("enter");
                }else{
                  console.log("dont");
                }
   						 	break;
   						 }
          case "maxLen":{
                          if(obj1.maxLen<obj.length){
                            console.log("enter");
                          }else
                          {
                            console.log("dont");
                          }
            break;
          }
          case "minLen":{
                        if(obj1.minLen>obj.length)
                        {
                          console.log("enter");
                        }
                        else
                        {
                          console.log("dont enter");
                        }
                        break;

          }
          case "mustBe":{
                    if(obj1.length==obj.length)
                    {
                      console.log("enter");
                    }
                    else
                    {
                      console.log("dont");
                    }
                    break;
          }
			

          case "require":{
            if(obj==='' || obj==undifined){
                console.log("dont");
            }else{
              console.log("enter");
            }

            break;
          }
      }

   }


},
Num:function numbei(obj,obj1)
{
  //console.log(obj+"  "+obj1);
var keys=Object.keys(obj1);
for(var i=0;i<keys.length;i++)
   {
      switch(keys[i])
        {
          case "type":
                {
                if(obj.constructor==Number){
                  console.log("enter");
                }else{
                  console.log("dont");
                }
                break;
               }
          case "maxVal":{
               if(obj<obj1.maxVal){
                  console.log("enter");
                }else{
                  console.log("dont");
                }
             
            
            break;
          }
          case "minVal":{
            if(obj>obj.minVal){
              console.log("enter");
            }else{
                  console.log("dont");
                }
            break;
          }
          case "mustBe":{
            if(obj==obj.mustBe){
              console.log("enter");
            }else{
                  console.log("dont");
                }
            break;
          }
           case "require":{
            if(obj==0 || obj==undifined){
                console.log("dont");
            }else{
              console.log("enter");
            }

            break;
          }
      }

   }

}
};