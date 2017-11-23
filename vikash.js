
var humanStudy=function()
{
	var name="Vikash"
	console.log("This is the characteristics of "+ name);
}
humanStudy();

function humanFeatures(name,gender,age,height,weight,eyeColor,color)
{
	this.name=name;
	this.gender=gender;
	this.age=age;
	this.height=height;
	this.weight=weight;
	this.eyeColor=eyeColor;
	this.color=color;
	this.getData=function()
	{
		return "Name is " + this.name + "\nGender is " + this.gender + "\nAge is " + this.age + "\neyeColor is " + this.eyeColor +" \nFace Colour " + this.color;
	}

}



	var book = new humanFeatures("vikash",'Male',22,1.6,50,'black','fair');
console.log(book.getData()); 

function BMI (height, weight) {
    this.height=height;
    this.weight=weight;
    result=(weight/(height*height))
     this.getDetails = function () {
        return   "Height is " + this.height + "m" + "\n" + "Weight is "+ this.weight + "kg" +"\n" + "BMI is :" + result;
    }
    if(result<=18)
 {
 	console.log("You r UnderWeight");
 }
 else if(result<25  && result>18)
 {
 	console.log("You r Normal");
 }
 else
 {
 	console.log("You r Overweight");
 }

   
}
var bm = new BMI(1.6, 50);
console.log(bm.getDetails());    
