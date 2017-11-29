
var exec = require('child_process').exec;
var timezonelist = require('./TimeZoneOfsetList'); 
//console.log(timezonelist);
var interval;
function calculateUtc(){
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
  return utc;
}
var backup = function(time,timezone) {

  var utc = calculateUtc();
  var currenttime= utc-timezonelist[timezone];
 // console.log(currenttime);
  if(time == currenttime){
    clearInterval(interval);  
    console.log("Backup Started");  
    var child = exec("sudo ./dbbackup.sh", function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      setTimeout(function (){interval = setInterval(backup, 1000,24,"Asia/Kolkata");}, 60000); // 24 is 00:00
      if(error !== null) {
        console.log('exec error: ' + error);
      }
    });
    
  }
  

}

interval = setInterval(backup, 1000,24,"Asia/Kolkata");    // 24 is 00:00 