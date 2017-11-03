var nookeshResume={ 
                   Name:"Pyla.Nookesh Kumar",
	           Father_Name:"Appala Naidu",
		   Mother_Name:"SatyaVathi",
                   Phone:[9023404981,8125316190],
                   Mail:"nookeshpyla@gmail.com",

Educational_Qualifications:
[{
Graduation:

[
{Branch:"BTech"},
 {University:"Lovely Professional University"},
 {CGPA: 9.4}

],
Intermediate:

[

{Branch:"MPC"},
{College:"Narayana Junior College"},
{Percentage:96.8}
],
SSC:

[
{School:"Sarada EM High School"},
{CGPA:9.7},
{Place:"Narsipatnam"}
]

}],
Area_of_Interests:[{Networking:{Projects:"Done a Project based on CISCO routers and Switches"}},{CyberSecurity:{Projects:["Presently working on Vulnerability assessment and Penetration Testing","Business Continuity and Disaster Recovery Planning"]}}],
Hobbies:["Playing chess and Cricket","Ethical Hacking"]
}
console.log(nookeshResume.Educational_Qualifications[0].Graduation[2]);
console.log(nookeshResume.Area_of_Interests[1].CyberSecurity.Projects[0]);


