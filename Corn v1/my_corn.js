const exec  = require('child_process').exec;
setInterval(()=>{ 
    var date=new Date();
    var hour=date.getHours();
    var minutes=date.getMinutes();
     console.log('m');
    if((hour>=9 && minutes>=30) && (hour <=18 && minutes<=30)){
        console.log("hi");
     exec('bash /home/atif/Desktop/mongo_backup.sh', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
     console.log(stdout);
    });
  }
} ,1000*60*60);
