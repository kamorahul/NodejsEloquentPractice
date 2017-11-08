var Validator = require('jsonschema').Validator;
  var v = new Validator();

  var schema = {
    "id": "SimplePerson",
    "type": "object",
    "properties": {
      "name": {"type": "string","required":true},
      "address": {"type":"string","required":true},
      "votes": {"type": ["integer","string"], "minimum": 1,"optional":true}
    }
  };

function match(data){    //data comming from other file
  // console.log(data);
  if(v.validate(data, schema).errors[0]==undefined) //if no error
  return true;
  else {
    return false;
  }
}

module.exports={
  match
}
