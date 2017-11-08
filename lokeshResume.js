var myDetails={
	name:"Lokesh Dasila",
	age:21,
	fatherName:"Tribhuwan Singh Dasila",
	motherName:"Rukmani Dasila",
	education:[
		{graduation:{
			Type:"B.Tech.",
			stream:"ECE",
			college:"LPU",
			cgpa:5.17
		}},
		{12:
		{
			board:"CBSE",
			stream:"PCM",
			school:"Army Public School",
			percentage:50.4
		}},
		{10:
		{
			board:"CBSE",
			school:"Army Public School",
			percentage:65.5
		}}
	],
	placeVisited:['Lucknow','Jalandhar','Bhopal','Allahabad']

}
console.log(myDetails);
console.log("\nThe cgpa in graduation is "+myDetails.education[0].graduation.cgpa);
console.log("\nMy 12th board was "+myDetails.education[1]['12'].board);
console.log("\nMy 10th school was "+myDetails.education[2][10].school);