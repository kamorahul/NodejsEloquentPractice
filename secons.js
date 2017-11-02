
var details=require('./aks.json');
var makeHuman= function(){
        if(details.age>17&&details.age<70)
        {
            console.log("Candidate is eligible for voting with following details");
        }
        else if(details.age>70)
        {
            console.log("Candidate is elder and wont be able to travel to pooling station, details as follows");
        }
        else
            {
                console.log("Candidate is not eligible for voting");
                return;
            }
        
            return function(){
                console.log ("name", details.name);
                console.log("age" ,details.age);
                console.log("course" ,details.course);
                console.log("gender",details.gender);
                console.log("height",details.height);
                console.log("weight",details.weight);
        }();
    }
    
    makeHuman();