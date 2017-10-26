var Resume={
"Personal_Details":{"Name":"Karri Srujana","University":"LPU","Email":"srujanasru8@gmail.com","Mobile_Number":"7837971618"},
"Education":[{"Graduation":{"Year":"2018","stream":"B.tech-CSE","University":"LPU","CGPA":"8.07"}},
{"12th/Intermediate":{"Year":"2013","stream":"MPC","College":"Narayana Junior College","Percentage":"92.3%"}},
{"Matriculation":{"Year":"2011","Stream":"ICSE","School":"St.John's Parish School","Percentage":"70%"}}],
"Projects":[{"June2017-July2017":"cse-elibrary"},{"March2016-April2016":"Alumini database"},{"March2016-April2016":"Scientific calculator"},{"August2017-August2017":"Know your Company(KYC)"}],
"Hobbies":["playing chess","swimmimg","watching documentaries","trekking"],
"Areas_of_Interests":["Networking","software development","Artificial Intelligence","Web Development"],
"programming_languages":"java",
"Web_Development":["Bootstrap","Html-Css","SQL","Asp.Net","JavaScript"],
"Social_Activities":{"2015-2017":"Organized charity fund raising event for orphans under Ample Foundation"},
"Languages_known":["english","hindi","telugu"],
"Position_of_Responsbilities_and_activities":[{"2014-2017":"class Representative"},{"2015-2016":"co-ordinator of youthvibe 2016"},{"2015-2016":"participated in debate and elocution competition in youthvibe 2016"}]
}
console.log(Resume.Personal_Details.Name);
console.log(Resume.Hobbies[2]);
console.log(Resume.Education[1]["12th/Intermediate"].College);
console.log(Resume.Position_of_Responsbilities_and_activities[1]["2015-2016"]);
