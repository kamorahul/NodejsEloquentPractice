const cron= require('node-cron');
const {spawn} =require('child-process');
setInterval(crontab,1000*60);  //without using node-cron 
//cron.schedule('* * * * *',crontab());    //using node-cron
function crontab()
{
	var Hours=new Date().getHours();
	var Min=new Date().getMinutes();
	if(Hours==8 && Min==30)
	{
		const ls=spawn('bash',['/home/admin1/Desktop/test2.sh']);
		ls.on('close',(code)=>{
			console.log(`child process exited with code ${code}`);
		});
	}
}


