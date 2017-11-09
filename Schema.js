
//Import the mongoose module
 var mongoose = require('mongoose');
 var assert =require('assert');
 var Schema = mongoose.Schema;
 var mySchema= new Schema({
 	topic:{
 		type:String,
 		require:true,
 		unique: true
 		 
 	},
 	description:{
 		type:String,
 		required:true
 	     	},
    time : { 
    	type : Date, 
    	 default: Date.now 
    	},
    	//versionKey:false
});
 var x= mongoose.model('schema',mySchema);
 module.exports=x;
