


var humanBio = function(humanDetails)
  {console.log("Human Created and Details of Human are below");
  console.log("Name :-",humanDetails.Name);
  var Birth = dateOfBirth(humanDetails.Dateofbirth);
 Birth();
 var gen = gender(humanDetails.Gender);
 gen();
var hgt = height(humanDetails.Height);
hgt();
var wgt = weight(humanDetails.Weight);
wgt();
var nation = nation(humanDetails.Nationality);
nation();
var ability = ability(humanDetails.isPhysical_or_mental_disabilities);
ability();




 function dateOfBirth(Dob){
    return function() { return console.log("Date of birth of ",humanDetails.Name," :-",Dob)};
  }
  function gender(g){
    return function() { return console.log("Gender of ",humanDetails.Name," :-",g)};
  }
  function height(h){
    return function() { return console.log("Height of ",humanDetails.Name," :-",h)};
  }
  function weight(w){
    return function() { return console.log("Weight of ",humanDetails.Name," :-",w)};
  }
  function nation(n){
    return function() { return console.log("Nationality of ",humanDetails.Name," :-",n)};
  }
  function ability(a){
    if(a==true){
    return function() { return console.log(humanDetails.Name,"is having some physical/mental disability")};
  }
  else {
    return function() { return console.log(humanDetails.Name,"is not having any physical/mental disabilities")};
  }
}
}


var humanDetails = {"Name":"Murali",
"Dateofbirth":"31-03-1996",
"Gender":"Male",
"Height":"5'10",
"Weight":"75",
"Nationality":"Indian",
"isPhysical_or_mental_disabilities": false}
humanBio(humanDetails);
var humanDetails = {"Name":"sai",
"Dateofbirth":"3-10-1996",
"Gender":"Female",
"Height":"4'9",
"Weight":"60",
"Nationality":"Indian",
"isPhysical_or_mental_disabilities": true}
humanBio(humanDetails);
