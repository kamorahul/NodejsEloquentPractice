var humanBeing =
{
    "height" : 6.2,
    "weight" : 90,
    "color" : "white",
    "eyes_color" : "blue",
    "ethnicity"  : "English",
    "hair_color" : "brown",
    "IsWalkable" : true,
    "NoOfEyes" : 2,
    "NoOfHands" : 2,
    "NoOfFoot" : 2,
    "NoOfFingers" : 5,
   
}
function get()
{
    for (var i  in humanBeing) {
document.body.innerHTML += "<li>"+i+" = "+humanBeing[i] +"</li>";
    }
}
