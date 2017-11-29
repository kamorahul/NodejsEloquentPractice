const cron= require('node-cron')
,{spawn}  = require('child_process');
setInterval(method_1,1000*60)//without using cron npm
cron.schedule('0 9,17 * * *', method_1)//using cron module
function method_1(){
  //Backup will be created @9am and 5pm everyday
  var h=new Date().getHours(),m=new Date().getMinutes();
  if((h==9||h==17) &&m==0){
const ls = spawn('bash',['/home/adithya/Desktop/done.sh']);
ls.on('close',code=>{console.log(`child process exited with code ${code}`);});
  }
}
//To create backups at respective server locations at 9am and 5pm
