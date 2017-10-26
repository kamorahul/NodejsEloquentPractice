var name= "Arpit Gautam";
var email_id="arpit2gautam@gmail.com";

var cv={
	"Personal_Details":{
				"Name":name,
				"Email":email_id
			   },

	"academics":[
	             {"Graduation": "Graduation- 67.23 Year : 2018"},
		     {"Twelveth" : "Sr. Sec. - 78.8% Year : 2014"},
		     {"Tenth" : "High School- 95% Year : 2011"}
		     ],

	"Training_Accomplised":[
				{"AWS":"AWS Certified Solutions Architect- (Associate)- Undergone One month online training from Udemy and learned about the different services provided by AWS and have expirienced some of the Key services like IAM, S3, EC2,ELB."}
				],

	"Projects_undertaken":[
				{"MARK42":"1. MARK42 (Messaging And Reliablity Kit 42) - MARK42 was an offline chating software based on JAVA"},
				{"Century_Calendar":"2. Century Calendar - The project was about century calendar which will show events and day of the month based on C++"}
			      ],

	"Case_study":[
			{"Cloud_Gaming": "1. Gaming On Cloud - The case study was about the GaaS (Gaming as a Service)"},
			{"Load_Balancing_At_Cloud_Datacenters":"2. Load Balancing At Cloud Datacenters - Case study was about load balancer used at datacenters and the algorithms associated with it."}
		     ],

	"Community_Services":[
					{
					"One" : "1. Participated in Joy of Giving Initiative at Lovely Professional University: 2015"
					}
					,
					{
					"Two":"2. Participated in Tree Plantation Campaign at Jean Paul’s High School: 2011"
					}
			     
		       ],
			  
	"Hobbies":[
		"Playing Cricket",
		"Playing Cards",
		"Exploring new places"
		]

	}


console.log("Personal Details: ")
console.log(cv.Personal_Details.Name);
console.log(cv.Personal_Details.Email);
console.log("Academic Details :");
console.log(cv.academics[0].Graduation);
console.log(cv.academics[1].Twelveth);
console.log(cv.academics[2].Tenth);
console.log("Training Accomplishment :")
console.log(cv.Training_Accomplised[0].AWS);
console.log("Projects Undertaken :");
console.log(cv.Projects_undertaken[0].MARK42);
console.log(cv.Projects_undertaken[1].Century_Calendar);
console.log("Case Studies :");
console.log(cv.Case_study[0].Cloud_Gaming);
console.log(cv.Case_study[1].Load_Balancing_At_Cloud_Datacenters);
console.log("Community Services :");
console.log(cv.Community_Services[0].One);
console.log(cv.Community_Services[1].Two);
console.log("Hobbies :");
console.log(cv.Hobbies[0]);
console.log(cv.Hobbies[1]);
console.log(cv.Hobbies[2]);
