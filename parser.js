function decode(str)
{
//var str="127.0.0.1/path?name=vikas&pass=kaloti";

var temp=str.match("[?][a-z]+[=][a-z]+[&][a-z]+[=][a-z]+");
if (temp==null)
{
    return "invalid IP";
}
   else
   {
    var temp1=temp[0].match("[a-z]+");
       //console.log(temp1[0]);
    var temp2=temp[0].match("[=][a-z]+");
      if (temp2==null)
      {
         return "invalid IP";
      }
       else
      {
      var temp5=temp2[0].match("[a-z]+");
        //console.log(temp5[0]);
      var temp3=temp[0].match("[&][a-z]+");
            if (temp3==null)
             {
                return "invalid IP";
             }
              else
             {
              
               var temp6=temp3[0].match("[a-z]+");
                //console.log(temp6[0]);
               var temp4=temp[0].match("[a-z]+$");
               //console.log(temp4[0]);
                var jobj={
                          "a" : [temp1[0],temp5[0],temp6[0],temp4[0]]
                         };
                    return jobj.a;
             }
      }
   }

}
module.exports={
             decode};

