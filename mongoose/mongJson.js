var jsonObj=require('./jsonSchema.json')

// to find the length of json object
var size=Object.keys(jsonObj).length;

var keys=Object.keys(jsonObj);


var mongu=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/mydb';
var collectionCreated=false;

const insertData=(inObj)=>{
	var keysinObj=Object.keys(inObj);
	for(var i=0;i<size;i++)
	{
		if (!inObj[keys[i]]) {
			console.log(`${keys[i]} is not present in inserted object`)
			console.log("\n Data not inserted");
			return;
		}
		if ((jsonObj[keys[i]]==='number')||(jsonObj[keys[i]]==='string')) {
			if(!((typeof inObj[keys[i]])==(jsonObj[keys[i]])||((typeof inObj[keys[i]])=="number" && jsonObj[keys[i]]=="string")))
			{
				console.log(keysinObj[i]," type is not matched with schema");
				console.log("\n Data not inserted");
				return;
			}	
		}
		console.log(jsonObj[keys[i]]);
		if (jsonObj[keys[i]]==='date') 
		{
			if(!(inObj.birth.match(/[0-3]?[0-9]\/[0-1]?[0-9]\/[0-2][0-9][0-9][0-9]/)||(inObj.birth.match(/[0-3]?[0-9]-[0-1]?[0-9]-[0-2][0-9][0-9][0-9]/))))
			{
			console.log('Please enter the date in correct format \neither dd/mm/yyyy or dd-mm-yyyy ');
			return;
			}
		}
		if (keys[i]==='gender') {
			if ((inObj['gender']!=='male')&&(inObj['gender']!=='female')) {
				console.log('Gender male ya female');
			}
		}
		
	}

	mongu.connect(url,function(err,db){
		if (err) {throw err;}
		if (!collectionCreated) {
			db.createCollection('aadmiLog',function(err,res){
				if (err) {throw err;}
				console.log("\nCollection Created...\n\n");
				collectionCreated=true;
			})
		}
		db.collection('aadmiLog').insertOne(inObj,function(err,res){
			if (err) {throw err;}
			else
			{
				console.log(`Element inserted ${res}`);
				db.collection('aadmiLog').find({}).toArray(function(err,res){
					if(err) throw err;
					//console.log(res);
					db.close();
				})
				
			}
		})

	})

}

var yoObj={
	name:"iron man",
	id:1234,
	gender:"female",
	birth:'23-12-1996'	
	
}
insertData(yoObj);	