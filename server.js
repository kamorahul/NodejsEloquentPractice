
var exec = require('child_process').exec;
var interval;
var backup = function(time) {
  console.log("1");
  var date = new Date();
  var minutes = date.getMinutes()/60;
  var hours = date.getHours()+minutes;
  var offset = date.getTimezoneOffset()/60;
  var utc = hours+offset;
  if(utc>24){
    utc-=24;
  }
  else if(utc<0){
    utc+=24; 
  }
  if(time == utc){
    clearInterval(interval);  
    console.log("Backup Started");  
    var child = exec("sudo ./dbbackup.sh", function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      interval = setInterval(backup, 1000,18.5); // 18.5 is utc for 00:00 in india
      if(error !== null) {
        console.log('exec error: ' + error);
      }
    });
    
  }
  

}
interval = setInterval(backup, 1000,18.5);    // 18.5 is utc for 00:00 in india