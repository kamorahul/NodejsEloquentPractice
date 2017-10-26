var cv={
	"PERSONAL_DETAILS":{"Name":"Mohammad Atif","D.O.B.":"27th_Jan_1997","E_mail":"maatif2701@rediffmail.com","MobileNo":9592022321},
	"ACADEMIC":{
		"qual":[
		         {"Year":2018,"Degree":"B.tech","Institute":"LPU","per":77.76},
		         {"Year":2014,"Degree":"Intermediate","Institute":"NEA","per":78.8},
		         {"Year":2012,"Degree":"High-School","Institute":"NEA","per":95}
				]
			},
	"SKILL_SET":{
		"Programming_Languages":["c","c++","java"],
        "IDE":["Intellij","Devcpp","Eclipse"],
		"Operating_Systems":["Ubuntu_17.04","Red_Hat_Linux_9.0","Windows_10"],
        "Databases":"MySQL"
    },
	"PROJECTS":
	[
	 {"10000_years_calendar":{
		"Description":"Application based on java that could show that on particular date which day would occur in a span of 10,000 years.",
		"Duration":"Mar_2016_to_Apr_2016"
                             }
	 },
	 {
	   "Web_Scraper":{
		   "Description":"Developed Web Scrapper using JSoup library of Java which could parse the particular webpage and extract information from webpage.",
		   "Duration":"Feb_2017_to_Mar 2017"
	   }
	 }
	
	],
	"ACHIEVEMENTS":
	[
	  "Completed Java Master Class with Tim Buchalka- Udemy","Completed three months of CCENT training in Cisco Network Academy",
      "Awaraded certificate of completion on Hadoop Starter kit ,Udemy"	  
	],
	"LANGUAGE_PROFICIENCY":
	[
	  "English","Hindi","Urdu"
	]
		
};

//To display name
console.log("NAME :"+cv.PERSONAL_DETAILS.Name);

//To Display Email-ids
console.log("Email :"+cv.PERSONAL_DETAILS.E_mail);

//To Display Mobile NO
console.log("Mobile No :"+cv.PERSONAL_DETAILS.MobileNo);

//TO display year of B.tech
console.log("B.tech year:"+cv.ACADEMIC.qual[0].Year);

console.log("B.tech institution:"+cv.ACADEMIC.qual[0].Institute);

console.log("HighScool percentage:"+cv.ACADEMIC.qual[2].per);






/*var obj={
	"SKILL_SET":{
		"Programming_Languages":["c","c++","java"],
        "IDE":["Intellij","Devcpp","Eclipse"],
		"Operating_Systems":["Ubuntu_17.04","Red_Hat_Linux_9.0","Windows_10"],
        "Databases":"MySQL"
    }
}

var obj={
	"PROJECTS":
	[
	 {"10000_years_calendar":{
		"Description":"Application based on java that could show that on particular date which day would occur in a span of 10,000 years.",
		"Duration":"Mar_2016_to_Apr_2016"
                             }
	 },
	 {
	   "Web_Scraper":{
		   "Description":"Developed Web Scrapper using JSoup library of Java which could parse the particular webpage and extract information from webpage.",
		   "Duration":"Feb_2017_to_Mar 2017"
	   }
	 }
	
	]
}

var obj={
	"ACHIEVEMENTS":
	[
	  "Completed Java Master Class with Tim Buchalka- Udemy","Completed three months of CCENT training in Cisco Network Academy",
      "Awaraded certificate of completion on Hadoop Starter kit ,Udemy"	  
	]
}

var obj={
	"LANGUAGE_PROFICIENCY":
	[
	  "English","Hindi","Urdu"
	]
}*/



