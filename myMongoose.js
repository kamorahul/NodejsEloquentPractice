
var mongoozee = function(collection, dbData, data, schema){

    var respo = "";
    var dataArray = [];
    var schemaArray =[];
    var requiredFields = schema.required;
    var uniqueFields = schema.unique;
    var regExpFields = schema.regExp;
    for(i in data){
        dataArray.push(i);
    }
    for(i in schema){
        schemaArray.push(i);
    }

    //required field validation
    for(var i=0;i<requiredFields.length;i++){
        var temp = requiredFields[i];
        if(dataArray.indexOf(temp) < 0){
            respo += ">>> "+temp + " is required\n";
        }
    }

      //schema validation
    for(var i=0;i<dataArray.length;i++){
        var temp = dataArray[i];
        if(schemaArray.indexOf(temp)<0){
            respo +=">>> "+temp+" not found in schema\n";
        }else{
            if(data[temp].length < schema[temp].minSize || data[temp].length > schema[temp].maxSize){
                respo += ">>> "+temp+" length should be >= "+schema[temp].minSize+" and <= "+schema[temp].maxSize+"\n";
            }else{
                if( typeof(data[dataArray[i]]) !== schema[dataArray[i]].type.toLowerCase() ){
                    respo += ">>> data type mismatch for "+dataArray[i]+"\n";
                }
            }
        }
    }

    //regexp validation
    for(var i=0;i<regExpFields.length;i++){
        if(dataArray.indexOf(regExpFields[i])>-1){
            if(!schema[regExpFields[i]].reg.test(data[regExpFields[i]])){
                respo += ">>> "+regExpFields[i]+" is not a valid "+regExpFields[i]+"\n";
                if(regExpFields[i]==="password")
                    respo += "    password should contain at least 1 UPPERCASE, 1 lowercase letter, 1 number and 1 special character\n"
            }
        }
    }

    for(var i=0;i<dbData.length;i++){
        for(var j=0;j<uniqueFields.length;j++){
            if(dbData[i].hasOwnProperty(uniqueFields[j])){
                if(dbData[i][uniqueFields]===data[uniqueFields[j]]){
                    respo += ">>> "+uniqueFields[j]+" already exists in database\n"
                }
            }
        }
    }

   return respo;
}

module.exports = {
    mongoozee
};