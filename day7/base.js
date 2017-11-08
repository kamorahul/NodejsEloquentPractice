var user =require('./newData');
var process=require('process');
var name=new user({
name:'shivam',
password:123
});
name.save(function(err){
if(err) console.log('does not save');
 else
  console.log('save');
process.exit();
});