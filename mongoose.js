var MongoClient=require ('mongodb').MongoClient;
var url='mongodb://localhost:27017/db';	
	var schema= 
	{
		name:{ types:"string",required:true},
		age: { types:0,required:true},
	        weight:{ types:0,required:true}
	}
	var input=
	{
		name:"vikas",age:22,weight:65   
	}
	var count1=0;
	var count2=0;
	var key=Object.keys(schema);
	var key1=Object.keys(input);
	for(var i=0;i<key.length;i++)	
	{
		if((schema[key[i]].required)==true)
		{
			count1++;
		}
	}
	if(key.length>=key1.length)
	{
		for(var i=0;i<key1.length;i++)
		{	
			if(typeof schema[key[i]].types==typeof(input[key1[i]]))	
			{
				if((schema[key[i]].required)==true)
				{
					count2++;
				}		
			}
		}	
		if(count2==count1)
		{
			run();
		}
		else
		console.log("no. of required fields are not told in input");	
	}
	else
	console.log("enter valid no. of inputs");	
	
	function run()
	{
		
		MongoClient.connect(url,function(err,db)
		{
			var collection=db.collection('col');
			collection.insert(input);
	
			collection.find({}).toArray(function(err,res)
			{
				console.log(res);	
	
			})
		}
		)
	}
