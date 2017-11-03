var myras = {
	personal:{
		"Name":"Pranjal Bhardwaj",
		"Date of birth":"25/04/1997",		
		"Sex":"Male",
		"Father's Name":"Dileep Kumar Bhardwaj",
		"Mail id":"bpranjal@gmail.com",
		"Phone":"9876543210"
		},
	education:{
		graduation:{
			"Degree":"B.Tech",
			"Domain":"ECE",
			"Institute":"Lovely Professional University",
			"CGPA":"8.9",
			"Year of Passing":"2018"		
				},		
		Intermediate:{
			"Degree":"XII",
			"Board":"CBSE",
			"School":"Instrumentation School",
			"Percentage":"80%"
				},	
		Highschool:{
			"Degree":"X",
			"Board":"CBSE",
			"School":"Dr VSEC School",
			"CGPA":"8.4"
				}
			},
	Internship:{
			"Title":"Telecom Network Operation",
			"Organization":"Telenor India",
			"Duration":"1 Month"
			},
	Projects:[
			{
			"Title":"Game Devlopment",
			"Tool Used":"Netbeans",
			"Programming Language":"Java"
			},

			{"Title":"Filter Designing",
			"Tool Used":"MATLAB",
			}
			],
	Resident:{
			"Home City":"Farrukhabad",
			"Current City":"Chandigarh",
			}

}
console.log(myras)
console.log("Current Cgpa is ->"+ myras.education.graduation.CGPA)


