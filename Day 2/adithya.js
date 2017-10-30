	var Bio_Data = {
    "Name" : "Adithya vikram raj",
    "age" : "21",
    "gender" : "male",
    "university" : "Lovely Professional University",
    "hobbies" : ["Photography","Travelling","Reading Novels"],
    "email" : ["agvikramraj96@gmail.com","adithyagaroju@yahoo.com"],
    "marital_status" : false,
    "phys_chall" : false,
	"skills" : ["c","c++","java","html","css","javascript"]
};
//var jsonStr = JSON.stringify(Bio_Data);
var k=0;
for (i in Bio_Data) {
document.getElementById("play").innerHTML += "<li>"+i+" --> "+Bio_Data[i] +"</li>";
}
