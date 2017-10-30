
	var Resume = {
		"personalDetails" : {
				"name" : "Rudhir Shubhro",
				"gender" : "male",
				"dob" : "28-11-1995",
				"phoneNo" : "9872427940",
				"nationality" : "Indian",
				"emailId" : "rudhirshubhro@gmail.com",
				"address" : "H.No.318, Chhittupur, BHU, Varanasi – 221005, Uttar Pradesh"
			},
		"educationalDetails" : [
				{
					"year" : 2018,
					"degree" : "B.Tech(CSE)",
					"institute" : "Lovely Professional University",
					"percg" : 7.32	
				},

				{
					"year" : 2014,
					"degree" : "Intermediate",
					"institute" : "Sunbeam School Bhagwanpur",
					"percg" : 75.4
				},

				{
					"year" : 2012,
					"degree" : "Matriculate",
					"institute" : "Sunbeam School Bhagwanpur",
					"percg" : 8.6
				},
			],
		"summerTraining" : [
				{
					"location" : "Phagwara",
					"duration" : "Six Weeks",
					"title" : "Android App Development",
					"description" : "Undergone six weeks of summer training on Android App Development by Google. Developed basic apps like Calculator, Media Player and also developed a Hostel Booking App prototype as my project"
				},

				{
					"location" : "Udemy",
					"duration" : "Twenty One Days",
					"title" : "Data Analytics and Visualization",
					"description" : "Undergone a twenty-one hour online course on Python for Data Analysis and Visualization by Udemy. Analyzed small scale datasets from Kaggle and used Jupyter Notebooks from using Numpy, Pandas, Seaborn and Matplotlib libraries"
				}
			],
		"positionsOfResponsibility" : [
				{
					"position" : "House Captain",
					"place" : "Sunbeam School Bhagwanpur",
					"year" : 2011
				},

				{
					"position" : "Team Leader, Globe Trotting Event",
					"place" : "Sunbeam School Bhagwanpur",
					"year" : 2010
				}
			],
		"extraCurricularActivities" : [
				{
					"type" : "Seminars & Workshops",
					"description" : "Attended a two-day workshop on Ethical Hacking by Lucideous Technologies, April 2015 – Lovely Professional University"	
				},

				{
					"type" : "Achievement",
					"description" : "Awarded 2nd prize in International Informatics Olympiad in District Level,  November 2009 – Sunbeam School Bhagwanpur"
				},

				{
					"type" : "Achievement",
					"description" : "Awarded 3rd prize in Computer Quiz in Computer Literacy Fest, February 2011 – Sunbeam School Bhagwanpur"
				}
			],
		"languageProficiency" : ["English","Hindi","Bengali"]		
	};


// For Personal Details
 console.log(Resume.personalDetails);
// For Educational Details (2nd from the array)
 console.log(Resume.educationalDetails[1]);
// For Extra Curricular Activities
 console.log(Resume.extraCurricularActivities);