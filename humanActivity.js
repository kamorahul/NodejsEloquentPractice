function humanActivity1(name,gender,nationality,age,height,weight)
{
var x;
if(gender=="male"){x="He"}
else if(gender=="female"){x="She"}
console.log("My name is" ,name, ". I am ",gender,". I am an",nationality,". My age is ",age,". My height is",height,"feet",". My weight is",weight,"kgs");
if(age>18)
{console.log("You can vote for elections")}
else if(age==18)
{
console.log("first take your voter card")}
else
{console.log("you are minor")}

if(height>5 && weight>50)
{
console.log("Need to Exercise")}
else if(height>5 && 40<weight>=50)
{
console.log("Need to gain weight")}
else
{console.log("Need proper diet for fitness")}

if(weight>50)
{
console.log(x," cannot run more distance")}
else if(weight==50)
{
console.log(x," can run easily 2kms.....")}
else
{console.log(x," is weak.",x," can increase the weight")}
function status(maritalstatus)
{
if(maritalstatus=="single")
{console.log(x,"is not married")}
else
{
console.log(x,"is married")}}
status("married")}

function eyesight(righteye, lefteye)
{
if(righteye==lefteye)
{console.log("You are having",righteye,"for both eyes")}
else
{console.log("You are having",righteye,"to righteye and",lefteye,"to lefteye")}
}humanActivity1("siri","female","Indian",21,5,56)
eyesight(1.75,1.75)

