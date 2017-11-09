var schema1={
	name:"PureString",
	age:"Number",
	dob:"Date"};

var schema2={
	id:"Number",
	name:"PureString"};


var stringCheck=function(a){
	var check = /^[\w][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]+$/.test(a);
	return check;
	};
var numberCheck=function(a){
	var check = /^[0-9][^a-zA-Z_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]+$/.test(a);
	return check;
	};
var dateCheck=function(a){
	var check = /^[-0-9][^a-zA-Z_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]+$/.test(a);
	return check;
	};

module.exports = {                
//var validate=
validate :function(s,q){
	var v=true;
	for (var key in q) {
        if (s.hasOwnProperty(key)) {
		switch(s[key]){
		case "PureString":v=stringCheck(q[key]);  if(!v) {console.log("Not a Pure String");return v;}; break;
		case "Number":v=numberCheck(q[key]);if(!v) {console.log("Not a Number");return v;}; break;
		case "Date":v=dateCheck(q[key]); if(!v) {console.log("Not a Date");return v;}; break;
		}
	}else{
	console.log("Not a Property");
	return false;}
	}
	return v;
	}

};

var query1={
	name:"Deepak Chauhan",
	age:23,
	dob:"10-11-1996"};

var query2={
	id:"11401794",
	name:"Deepak Chauhan"};

//var res=validate(schema2,query2);
//console.log("Your query is "+res);
