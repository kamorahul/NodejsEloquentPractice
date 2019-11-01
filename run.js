
var child_process=require("child_process");
var time=require('./timezone.json');

var mn=new Date().getMinutes();
var hr=new Date().getHours();

var indian_offset=new Date().getTimezoneOffset()/60;
hr= hr+mn/60;
var UTCH=hr+indian_offset;

if(UTCH>24)
{
    UTCH-=24;
}
else if(UTCH<0){
    UTCH+=24;
}
console.log(UTCH);
function TimeCalculate(t){
    var decimaltime= t;
    var hrs = parseInt(Number(decimaltime));
    var min = Math.round((Number(decimaltime)-hrs) * 60);
    var clocktime = hrs+':'+min;
    var tarr=[];
    tarr[0]=hrs; tarr[1]=min;
   
//console.log("time is"+tarr)
return tarr;
}

var timeObj=setInterval(backupMethod,1000*30); //every half an hour

function backupMethod(){
for(var i=0;i<time.length;i++)
{   

    var ttime=UTCH+time[i].offset;
    if(ttime>24)
    {
        ttime-=24;
    }
    else if(ttime<0)
    {
        ttime+=24;
    }
    var readTime=TimeCalculate(ttime);
    if(readTime[0]==20&& readTime[1]==00)   //backup at 8:00 pm 
    {
        console.log("Backup has been taken from "+time[i].utc);
        var workerProcess = child_process.exec('sh backup.sh');
        workerProcess.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });
        workerProcess.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });
        workerProcess.on('close', function (code) {
            //console.log('child process exited with code ' + code);
        })
    }
}
clearInterval(timeObj);
}


