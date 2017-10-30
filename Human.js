var createAHuman = function(name,Gender, age, Nationality, height, weight,eyesightL,eyesightR){
  return function(){
console.log("-------------------------------------------------------->");
console.log("Name           :",name);
console.log("Gender         :",Gender);
console.log("Age            :",age);
console.log("Nationality    :",Nationality);
console.log("Height         :",height,"cms");
console.log("Weight         :",weight,"kgs");
console.log("Eye-sight      :",eyesightL,";",eyesightR);
console.log("-------------------------------------------------------->");

  }
}

var a = createAHuman("Dinesh","Male",20,"India", 180,70,"-1.75","-1.5");
var b = createAHuman("Shivani","Female",22,"Australia", 165,55,"0","0");
a(); b();
