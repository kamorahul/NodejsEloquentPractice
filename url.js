var id_pass={};
var url="www.mail.google.com/?email=ashishshukla@gmail.com##pass=12345";
url.replace(new RegExp("([^?=*##]+)(=([^##]*))?","g"),
//url.replace(new RegExp("username\=([a-zA-Z]+[0-9]*)((\&)(password)\=([\w+]+))","g"),
//var reg=new RegExp(/username\=([a-zA-Z]+[0-9]*)((\&)(password)\=([\w+]+))/);
function($1,$2,$3,$4){
	//url	
	//console.log(JSON.stringify(id_pass));    
	id_pass[$2]=$4;
}); 
console.log("Email id is: " + JSON.stringify(id_pass.email));
console.log("Password is: " + JSON.stringify(id_pass.pass));
