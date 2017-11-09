var human = function(gender,height,weight,hairColor,blood,feet) {
    if(gender == "male") {
      console.log("The human is a Male. Following are the properties : ");
      console.log("Height : "+height);
      console.log("Weight : "+weight);
      console.log("Hair Color : "+hairColor);
      console.log("Blood Group : "+blood);
      if(feet == "flatfeet") {
        console.log("He cannot join the army because he has flat feet");
      }
      else {
        console.log("He can join the army");
      }
    }
    else if(gender == "female") {
      console.log("The human is a Female. Following are the properties : ");
      console.log("Height : "+height);
      console.log("Weight : "+weight);
      console.log("Hair Color : "+hairColor);
      console.log("Blood Group : "+blood);
      if(feet == "flatfeet") {
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
human("male","6'1",78,"Brunette","A+","normal");
human("female","5'2",53,"Blonde","B+","flatfeet");
human("jfjf","8",43,"Black","B-","abnormal");
