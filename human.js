var config=require('./huma.json');
var make=function()
{
return function()
{
if(config.gender="Male")
{
console.log("Human created");
console.log("He");

}
else if(config.gender="female")
{
console.log("Human created");
console.log("she");
}
else
{
console.log("Undefined gender");
}
return function()
{

console.log("height",config.height);
console.log("weight",config.weight);
console.log("age",config.age);
}();
}();
}
make();

