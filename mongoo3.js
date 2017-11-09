var MongoCl=require ('mongodb').MongoClient
var url='mongodb://localhost:27017/MyDb';	
	var schema= 
	{
		name1:{ types:"string",required:true},
		age1: { types:0,required:true},
		college:{ types:"string",required:true},
		height:{ types:0,required:false}, //schema with which it will be compared
	}
	var input=
	{
		name:"taj",age:45,college:"lpu"  //sample of input json  
		//height is optional here//
	}
	var counter1=0;
	var counter2=0;
	var key=Object.keys(schema)
	var key2=Object.keys(input)
	for(var i=0;i<key.length;i++)	
	{
		if((schema[key[i]].required)==true)
		{
			counter1++;
		}
	}
//	console.log(counter1)
//	console.log(key.length,key2.length)
	if(key.length>=key2.length)
	{
		for(var i=0;i<key2.length;i++)
		{	
			if(typeof schema[key[i]].types==typeof(input[key2[i]]))	
			{
				//console.log(input[key2[i]])
//				console.log("true")
				if((schema[key[i]].required)==true)
				{
					counter2++;
				}		
			}
		}
//		console.log(counter2)	
		if(input.height==null)
		{
			input.height="NOT mentioned"
		}
		
		if(counter2==counter1)
		{
			execute();
		}
		else
		console.log("no. of required fields are not told in input")	
	}
	else
	console.log("enter valid no. of inputs")	
	
	function execute()
	{
		
		MongoCl.connect(url,function(err,db)
		{
			var collection=db.collection('col1');
			collection.insert(input)
	
			collection.find({}).toArray(function(err,file)
			{
				console.log(file)	
	
			})
		}
		)
	}