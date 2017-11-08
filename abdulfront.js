var x=require('./abdulfront.json');
var makeHuman= function() { 
    return function() {
        //console.log(x.gender);
        if(x.Gender=="male")
        {
            console.log("Human created!!");
        console.log("His properties are as follows:");
//console.log(x.height);        
}
        else if(x.Gender=="Female")
        {
            console.log("Human created!!");
            console.log("Her properties are as follows:");
//console.log()        
}
        else
        {
            console.log("UNSPECIFIED GENDER! TRY AGAIN!");
         return;
        }
        return function(){
        console.log("Gender: ",x.Gender);
        console.log("Height: ",x.height);
        console.log("Weight: ",x.weight);
        console.log("Hair color: ",x.hairColor);
        }();

}();

}
makeHuman();
