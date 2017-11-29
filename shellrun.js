const exec = require('child_process').exec;

setInterval(function(){
var myscript = exec('bash runn.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
},1000*60*60*6);  // it will run the script for backup after every 6 hours//