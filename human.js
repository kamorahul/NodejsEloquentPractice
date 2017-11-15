function human(gender,age,height,weight,grip)
{
console.log("Gender   : ",gender)
console.log("Age      : ",age)
console.log("Height   : ",height)
console.log("Weight   : ",weight,"Kg")
console.log("Grip     : ",grip,"Kg")
fitness(gender,height,weight);
gripeval(gender,grip);
return BMI(height,weight);
}

function fitness(gender,height,weight) //function to evaluate the fitness of the person
{
if(gender == "female")
{
if(height == 5.1 && 43 < weight < 49)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.2 && 50 < weight < 55)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.3 && 56 < weight < 57)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.4 && 49 < weight < 60)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.5 && 51 < weight < 62)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.6 && 53 < weight < 65)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.7 && 55 < weight < 67)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.8 && 57 < weight < 70)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.9 && 59 < weight < 72)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.10 && 61 < weight < 75)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 5.11 && 63 < weight < 77)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else if(height == 6.0 && 65 < weight < 80)
{
console.log("She is having ideal weight for ",height," height \nShe is less prone to the weight related diseases");
}
else
console.log("She is not having ideal weight for ",height," height !!!\nShe is prone to the weight related diseases!!!!!!");
}
else if(gender == "male")
{
if(height < 5 && 28 < weight <40)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");

}
else if(height == 5.1 && 45 < weight < 55)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.2 && 48 < weight < 59)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.3 && 50 < weight < 61)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.4 && 53 < weight < 65)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.5 && 55 < weight < 68)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.6 && 58 < weight < 70)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.7 && 60 < weight < 74)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.8 && 63 < weight < 76)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.9 && 65 < weight < 80)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.10 && 67 < weight < 83)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 5.11 && 70 < weight < 85)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else if(height == 6.0 && 72 < weight < 89)
{
console.log("He is having ideal weight for ",height," height \nHe is less prone to the weight related diseases");
}
else
console.log("He is not having ideal weight for ",height," height !!!\nHe is prone to the weight related diseases!!!!!!");
}
else
return console.log("please check the gender to get the fitness details");
}

function gripeval(gender,grip)  // fuction to evaluate the grip of the person
{
if(gender == "male")
{
if(grip >64)
{
console.log("He has Excellent Grip");
}
else if(53 < grip < 64)
{
console.log("He has Very Good Grip");
}
else if(52 < grip < 55)
{
console.log("He has Above Average Grip");
}
else if(48 < grip < 51)
{
console.log("He has Average Grip");
}
else if(44 < grip < 47)
{
console.log("He has Below Average Grip");
}
else
{
console.log("He has Poor Grip");
}
}
else if(gender == "female")
{
if(grip > 38)
{
console.log("She has Excellent Grip");
}
else if(34 < grip < 38)
{
console.log("She has Very Good Grip");
}
else if(30 < grip < 33)
{
console.log("She has Above Average Grip");
}
else if(26 < grip < 29)
{
console.log("She has Average Grip");
}
else if(23 < grip < 25)
{
console.log("She has Below Average Grip");
}
else
{
console.log("She has Poor Grip");
}
}
}


function BMI(height,weight)   //For BMI height in ft and weight in kg
{
var BMI;
BMI = (weight) / (heightc(height) * heightc(height)); 
BMI = BMI.toPrecision(2);
console.log("BMI of the person is ",BMI);
}


function heightc(height)      //function to convert height in ft to meter 
{
height = height * 0.3048;
return height;
}


human("female",30,5.0,51,50)
