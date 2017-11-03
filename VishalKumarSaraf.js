var student={
	"Name" : [
				{"first" : "Vishal"},
				{"last" : "Saraf"}
			],
	"Email" : "vishalsaraf44@gmail.com",
	"no" : "9876543210",
	"course" : "B.Tech",
	"year" : "4th",
	"DOB" :{
				"Date" : "28",
				"Month" : "July",
				"Year" : "1997"
			},
	"Graduation" : [
					 {
					 	"B.tech" : "70.56",
					 	"12th" : "68.8",
					 	"10th" : "74"
					 }
					],
	"Projects" : [
					{"cab booking software" : "this is developed using java"},
					{"banking website" : "this is developed using servlets"}
				 ],
	"skills" : ["C","C++","JAVA","Servlets","JSP"],
	"Language Proficiency" : ["English","Hindi","Punjabi"],
}

process.stdout.write("My Name is -> " + student.Name[0].first +" "+student.Name[1].last);console.log();
process.stdout.write("Email id -> ");console.log(student.Email);
process.stdout.write("Contact No. -> ");console.log(student.no);
process.stdout.write("Course -> ");process.stdout.write(student.course);process.stdout.write(" ");process.stdout.write(student.year +" Year");console.log();
process.stdout.write("DOB -> ");console.log(student.DOB);
process.stdout.write("Secured "+student.Graduation[0]["B.tech"]+"% in B.Tech "+"and "+student.Graduation[0]["12th"]+"% in 12th and "+student.Graduation[0]["10th"] +"% in 10th");console.log();
process.stdout.write("Projets -> ");console.log(student.Projects);
process.stdout.write("Skills I Have -> ");console.log(student.skills);
process.stdout.write("Language Proficiency -> ");console.log(student["Language Proficiency"]);