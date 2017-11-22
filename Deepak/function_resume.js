var human=function(details){

function dateOfBirth(dob){
    return function() { console.log("Date of birth is",dob)};
  }
  function gender(g){
    return function() { return console.log("Gender is ",g)};
  }
  function height(h){
    return function() { return console.log("Height is ",h)};
  }
  function weight(w){
    return function() { return console.log("Weight is ",w)};
  }
 function phone(p){
    return function() { return console.log("Phone is ",p)};
  }
 function disabled(d){
    return function() { return console.log("Weight is ",d)};
  }

console.log("Details of ",details.Name);

var birth = dateOfBirth(humanDetails.DateOfBirth);
birth();
var ge=gender(details.Gender);
ge();
var hi=height(details.Height);
hi();
var we=weight(details.Weight);
we();
var ph=weight(details.Phone);
ph();
var di=weight(details.isDisabled);
di();

}


var humanDetails = 
{"Name":"Dipak","DateOfBirth":"10/11/1996","Gender":"Male","Height":"5'10","Weight":"70","Phone":"9459406002","isDisabled": false}
human(humanDetails);
