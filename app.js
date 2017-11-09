  var file=require('./schema.json');
  var flag=0;
var data;
// var data = {
//    "name": "Barack Obama",
//   // "last_name": "Barack Obama",
//   "address":  "W DC America",
//    "votes": "12"     //string or integer
//   };
function validData(dataFromDatabaseFile)
{
data=dataFromDatabaseFile;

var keyArray=(Object.keys(file));
var filesize=(Object.keys(file)).length;
//var length=keyArray.length;
var dataKeys=Object.keys(data);
var datasize=Object.keys(data).length;

if(datasize<=filesize)
{
var isMatch= match(keyArray);
return isMatch;
}else {
  console.log("data invalid");
  return false;
}
}

function match(keyArray){
    for(var i=0;i<keyArray.length;i++)
    {
      var propName=keyArray[i];  //schema keys from schema.json
      var isRequired=file[keyArray[i]]["required"];
      var filePropType=file[keyArray[i]]["type"];

      if(isRequired)
      {
          if(data.hasOwnProperty(propName))
          {
          var istrue=  typeMatch(filePropType,propName);
          return istrue;
          }
          else {
            //console.log("query does not match to schema");
            return false;
            break;
          }
              }
      else {
          if(data.hasOwnProperty(propName))
          {
          var istrue= typeMatch(filePropType,propName);
          return istrue;
          }
      }
    }
}


var typeMatch=function(filePropType,propName){
  if(typeof filePropType=="object")
  {
    for(var k=0;k<filePropType.length;k++)
    {
      if(filePropType[k]==typeof data[propName])
      {
        console.log("query successfully match to json schema");
        return true;
      }
    }
  }

else  if(filePropType==typeof data[propName])
  {console.log("query successfully match to json schema");
  return true;
}
  else
  {

    console.log("file type not  match");
    return false;
  }

}


module.exports={
  validData
}
