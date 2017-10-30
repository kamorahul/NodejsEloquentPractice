var x=require('./mayank_human1.json');
//console.log(x.gender);
//var
var genHuman=function(){
return function(){
if(x.gender=="male" || x.gender=="female")
{
console.log("Human Generated");
console.log("properties:");
}
else
{
console.log("NOT HUMAN....TRY AGAIN!");
return;
}
return function(){
console.log("Gender:",x.gender);
console.log("Height:",x.height);
console.log("Weight:",x.weight);
console.log("Color:",x.color);
console.log("Human from ",x.native);

}
();
}
();
//var abc=genHuman();
//abc();
 }
genHuman();



