var mongoose=require('mongoose');
var cb = function(err){
	    if(!err)
	        console.log("Connection Opened");
	    else
	        console.log("Connection Opened Failed");
	    };
mongoose.connect('mongodb://localhost/detail',cb);

 var MySchema=mongoose.Schema;
 var db=mongoose.connection;
 //var detail=require('./detail.js');
var db=mongoose.createConnection();

var user=new MySchema({
	userid:{type:String ,required:true,unique:true,index:true,trim:true},
	age:{type:Number},
	name:{type:String},
	id:{type:Number},
	

});

	var userModel = mongoose.model('goose',user); //users is collection here in my case

	var vk1 = new userModel({userid:123,age:22,name:'VikashSingh', id:1,regdate:Date.now});
	var vk2 = new userModel({userid:"vikash101",age:20,name:'Vikki', id:2,regdate:Date.now});

	var records=function(err,log){
		//console.log("Total records found:"+ log.length);
		for(var i=0;i<log.length;i++)
			{
			console.log((i+1) + "\t" +log[i]._id + "\t" +log[i].userid  + "\t" +log[i].age + "\t" +log[i].name  + "\t" +log[i].id);
			}
			console.log("Total records found:" +i);
		};

	var printsave=function (err)
	{
		if(err)
		{
		console.log(err);
		}
		else
		{

			console.log("Saving Done !!");
			
		}
	};
	vk1.save(printsave);
	vk2.save(printsave);
	userModel.find(records);

	userModel.count({},function(err,count){
	    console.log("No Of Records in users Schema:"+count);
	});

	// userModel.where('age').lt(22).exec(records);


	//userModel.find({userid:"vikash100"},records);
	//userModel.find({userid:"vikash100"},{"_id":0},records);
	//userModel.remove({id:"1"});
