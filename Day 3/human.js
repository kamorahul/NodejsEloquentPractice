var a = function human(name,gender,age,occupation,height,weight,legs,eyes){
	var it="his",it1="he";
	if(gender=="male"){
		it="his";
		it1="he";
		}
	else{
		it="her";
		it1="she";
		}
	
	(function () {
			console.log(it+" name is "+ name);})();
				
	(function (){
			console.log(it+" gender is " + gender);})();
			
	(function (){
			console.log(it1+" is of " + age+" years");})();
		
	(function (){
			console.log(it1+" is a " + occupation);})();
		
	(function (){
			console.log(it1 +" has a height of " + height);})();
		
	(function (){
			console.log(it+ " weight is " + weight +" Kg");
		
			if(weight <25){
					console.log(it1+" has malnutrition.");
								}
			else if(weight > 70){
					console.log(it1+" is obese.");
							}
			else {
					console.log(it1+" has balanced and proper weight ")
							}
						})();
					
	(function (){
			if(legs == 2)
					console.log(it1+" is suitable to Swim and Run as he has " + legs+ " legs");
			else
					console.log("Sorry...."+it1+" is not suitable to Swim or Run.");})();

	(function (){
			if(eyes == 2)
					console.log(it1+" has perfect vision with " + eyes+ " eyes");
			else
					console.log(it1+" has imperfect vision.");
							})();
};


a("Pranjal","male",20,"Student",5.8,60,2,2);
console.log("\n \n");
a("Shivi","female",4,"Kid",3,24,2,2);
