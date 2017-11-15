var createHumanBeing=function(name,age,height,weight,color,gender,birthplace,bloodgroup) {
	return function () {
		console.log("I am " + name + " , " + age + " years old guy from " + birthplace + " having " + height + " height and " + weight + " kg weight resp. My Blood Group is " + bloodgroup + ". I am " + color + "in color.");
	}
}

var x=createHumanBeing("Vishal",20,"5' 11''",70,"fair","Male","Sirsa","O+");
x();