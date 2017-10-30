var humanBeing =
{
	"height" : 5.10,
	"weight" : 60,
	"color" : "fair",
	"eyes_color" : "black",
	"ethnicity"  : "Indian",
	"IsSpeakable" : true,
	"IsWalkable" : true,
	"IsRunnable" : true,
	"NoOfEyes" : 2,
	"NoOfHands" : 2,
	"NoOfFoot" : 2,
	"hairColor" : "black",
}
function get()
{
	for (var i  in humanBeing) {
document.body.innerHTML += "<li>"+i+" = "+humanBeing[i] +"</li>";
	}
}
