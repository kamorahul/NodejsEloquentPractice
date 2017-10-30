
var data=[
{
	"name":"shivam", 
	"height":"5'10",
	"weight":"50kg",
	"moving":"move",
	"gender":"male"
}
];
var human =function humanpro(data)
{
	var data=JSON.parse(data)
	//console.log(data[0].name);
	nameIs(data[0].name);
	height(data[0].height);
	weight(data[0].weight);
	moving(data[0].moving);
	gender(data[0].gender);
	function nameIs(name){
	console.log("name is",name);
	}
	function height(height){
		console.log("height is",height);
	}
	function weight(weight){
		console.log("weight is about",weight);
	}
	function moving(move){
	console.log("is",move);
	}
	function gender(gen){
		console.log("gender is",gen);
	}


}

human(JSON.stringify(data));