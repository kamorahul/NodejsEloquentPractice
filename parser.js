function decode(str){// var str="127.0.0.1/login?name=ranjith&password=1234";

var p=str.match("[?]*[a-z]+[=][a-z]+[&][a-z]+[=][0-9]+");
console.log(p)
if(p==null){
	console.log("invalid");
}
else{
	var p2=p[0].match("[a-z]+");
	//console.log(p2[0]); name
    var p3=p[0].match("[=][a-z]+");
    if(p3==null){
    		console.log("invalid");
    }
    else{
      var p4=p3[0].match("[a-z]+");
      	//console.log(p4[0]); //ranjith

        var p5=p[0].match("[&][a-z]+");
    //console.log(p5[0]); &password
       if(p5==null){
    	console.log("invalid");
       }
    else{
    	var p6=p5[0].match("[a-z]+");//password
    	var p7=p[0].match("[0-9]+$"); //1234
    	var x={
    		"my":[p2[0],p4[0],p6[0],p7[0]]
    	}
        //console.log(p6[[0]]); 
        console.log(x.my);
    }
}
  }
}
module.exports={decode};
//decode();