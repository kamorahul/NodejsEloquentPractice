var resume = {
	"Objective": "To work in challanging environment where I can exhibit my utmost skills for the growth of organization along with me",
	"Personal" : {
		"name" : "Javaid",
		"age" :  "23",
		"gender" : "male",
		"contact" : "9872290135",
		"email"   : "javaidahmad.ganaie@clicklabs.co"
	},
	"Acadmics" : {
		"institute" : {
			"LPU" : {
				"Course" : "MCA",
				"CGPA"   : "9.34",
				"Year"	 : "2018"	
			} ,
			"SITE": {
				"Course" : "BCA",
				"CGPA"   : "9.30",
				"Year"	 : "2015"
			},
			"BOSE": {
				"Course" : "12th",
				"CGPA"	 : "7.9",
				"Year"	 : "2012"
			}
		}
	},
	"Experience" : {
		"Company"     : "Calance Software Pvt. ltd",
		"Designation" : "Consultant Technology",
		"Duration"	  : "1 year"
	},
	"Technical_Skills":{
		"Programming_Technologies" : [
			{
				"Java":"Advanced","Swift":"Intermediate","Php":"intermediate","Java Script":" Intermediate"
			}
		],
		"Web_Technologies" :[
			{
				"HTML":"Advanced", "CSS" : "Advanced", "JQuery":"Advanced", "bootstrap":"Advanced","Java Script":"Advanced"
			}
		],
		"QA_Tools" : [
			{
				"Selenium webdriver":"Advanced", "testNG":"Intermediate", "JUnit":"intermediate"
			}
		]
	},
	"Hobbies"   : ["Cooking", "Playing chess and cricket","Gymming"],

	"Languages known" : ["English","Hindi","Urdu","Kashmiri"]
	

};
console.log(resume.Acadmics.institute.LPU); //output: Course: "MCA", CGPA: "9.34", Year: "2018"
console.log(resume.Technical_Skills.Programming_Technologies[0]);