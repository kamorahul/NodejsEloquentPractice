(function fn(){console.log("hi")})();
var x= function(){console.log("hello")};
x();

var makeAVehicle = function(color,isAuto){return function(){console.log("Cars color is",color)}};
var carCreated = makeAVehicle("red",true);
console.log(carCreated());

var makeAVehicle1 = function(color,isAuto){
console.log("Cars color is",arguments[0]);};
makeAVehicle1("blue");


