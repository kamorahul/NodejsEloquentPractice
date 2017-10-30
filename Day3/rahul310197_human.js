var data = require('./rahul310197_human.json');

var mkc = function makehuman()
{ return   function()
            {  if(data.f_name.length<=0 || data.l_name.length<=0 || Number(data.age)<=0 || Number(data.height)<=0 || Number(data.weight)<=0) 
		       {  console.log("Human Not Created");
			   }
			   else if(data.sex!="Male" && data.sex!="Female")
			   {  
			     console.log("Human Not Created");
			   }   
			   else
			   {  ( function()
				    { 
					   console.log("  Human Created");
				       console.log("First Name:",data.f_name);
				       console.log("Last Name:",data.l_name);
			           console.log("Age:",data.age);
				       console.log("Sex:",data.sex);
				       console.log("Height:",data.height);
				       console.log("Weight:",data.weight);
				    }
				  ) ();
			   }
		    }
		 
} 
mkc()();