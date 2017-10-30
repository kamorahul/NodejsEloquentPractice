
var humanBio = function(humanDetails)
//kk
{
  	x=Object.keys(humanDetails).length
  	if(x==8)
  	{	
  		var Name=function()
  		{								//**Anonymous fxns**
  			console.log("**Human Created Successfully**")
  			console.log("Name - ",humanDetails.Name)
  		}	
  		Name()
  		var Birth =function()
  		{							//**Anonymous fxns**	
  			console.log("Birth - ",humanDetails.Dateofbirth);
  		}
  		Birth()
  		var gen = function()
  		{								//**Anonymous fxns**
  			console.log("Gender - ",humanDetails.Gender);
  		}
  		gen()
  		var hgt = function()
  		{								//**Anonymous fxns**
  			console.log("Height - ",humanDetails.Height)
  		}
  		hgt()
  		var wgt = function()
  		{								//**Anonymous fxns**
  			console.log("Weight - ",humanDetails.Weight)
  		}
  		wgt()
  		var Nationality = function()
  		{						//**Anonymous fxns**	
  			console.log("Nationality - ",humanDetails.Nationality)
  		}
  		Nationality()
  		var isPhysicalChallenged = function()
  		{			//**Anonymous fxns**
  			console.log("isPhysicalChallenged - ",humanDetails.isPhysicalChallenged)
  		}
  		isPhysicalChallenged()							
  		var isGraduated = function()
  		{						//**Anonymous fxns**
  			console.log("isGraduated - ",humanDetails.isGraduated)
  		}
  		isGraduated()
  		console.log("--------------------------------------------------------")
  	}
  	else
  	{
  		console.log("incomplete data")    //for incomplete data it will show this message
  	}
}
var humanDetails1 = {"Name":"Gurtaj","Dateofbirth":"01-03-1997","Gender":"Male","Height":"5'09","Weight":"63","Nationality":"Indian","isPhysicalChallenged": false,"isGraduated" : true}
var humanDetails2= {"Dateofbirth":"01-04-1996","Gender":"Male","Height":"5'07","Weight":"61","Nationality":"Indian","isPhysicalChallenged": false,"isGraduated" : true}
humanBio(humanDetails1);
humanBio(humanDetails2);
