var c = require('./Day4.json');
var makeAMan = function()
{
    return function()
    {
        if(c.gender=="male")
        {
            console.log("Human created!!");
            console.log("His properties are: ");
        }
        else if(c.gender=="female")
        {
            console.log("Human created!!");
            console.log("Her properties are: "); 
        }
        else
            {
                console.log("Undefined gender.\nUnable to create human of this kind!!");
                return;
            }
        
            return function(){
            console.log("Name: ",c.name);
            console.log("Age: ",c.age);
            console.log("Gender: ",c.gender);
            console.log("Height: ",c.height);
            console.log("Weight: ",c.weight);
            console.log("Blood_Group: ",c.blood_group);
            console.log("Hair_color: ",c.hair_color);
        }();
    }();
    }
    makeAMan();
//javscript with json
