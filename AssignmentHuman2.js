//Creating human attributes
var createHuman ={
	personalData: function(name,age,height,weight,gender){
	    return personalObj={
			name : name,
			age : age,
			height:height,
			weight:weight,
			gender:gender	
		};
	},
	professionalData: function(job,designation,salary){
		return professionalObj = {
			job:job,
			designation:designation,
			salary:salary
		};
	},
	educationData: function(qualification, yearOfPassing,CGPA){
		return educationObj = {
			qualification:qualification,
			yearOfPassing:yearOfPassing,
			CGPA:CGPA
		};
	},
	contactData : function(mNo,email,emergencyContact){
		return contactObj = {
			mNo:mNo,
			email:email,
			emergencyContact:emergencyContact
		};
	}
};
var perData = createHuman.personalData("Javaid Ahmad", 23, 5.11, 71, "male");
var proData = createHuman.professionalData("Software developer", "Technical Intern","Rs. 10000");
var eduData = createHuman.educationData("MCA", "2018", 9.34);
var contData = createHuman.contactData("9872290135", "rahijavaid5@gmail.com","9906739920");
console.log(perData);
console.log(proData);
console.log(eduData);
console.log(contData);