//human_shamik.json file also uploaded
var config=require('./human_shamik.json');
var makeHuman= function()
{
    return function(){
        if(config.gender=="Male")
        {
            console.log("Human created!!");
            console.log("His properties are: ");
        }
        else if(config.gender=="Female")
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
            console.log("Height: ",config.height);
            console.log("Weight: ",config.weight);
            console.log("Racial profile: ",config.race);
            console.log("Hair color: ",config.hair);
        }();
    }();
    }
    makeHuman();

