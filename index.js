var cron = require('node-cron');
const exec = require('child_process').exec;

cron.schedule('* * * * *', function(){
var yourscript = exec('sh ff.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
  console.log('running a task every minute');
});