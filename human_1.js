var a = require('./details.json');
var human = function() {
    if(a.gender == "male") {
      console.log("The human is a Male. Following are the properties : ");
      console.log("Height : "+a.height);
      console.log("Weight : "+a.weight);
      console.log("Hair Color : "+a.hairColor);
      console.log("Blood Group : "+a.blood);
      if(a.feet == "flatfeet") {
        console.log("He cannot join the army because he has flat feet");
      }
      else {
        console.log("He can join the army");
      }
    }
    else if(a.gender == "female") {
      console.log("The human is a Female. Following are the properties : ");
      console.log("Height : "+a.height);
      console.log("Weight : "+a.weight);
      console.log("Hair Color : "+a.hairColor);
      console.log("Blood Group : "+a.blood);
      if(a.feet == "flatfeet") {
        console.log("She cannot join the army because he has flat feet");
      }
      else{
        console.log("She can join the army");
      }
    }
    else{
      console.log("Gender specified is invalid");
    }
}
human();
