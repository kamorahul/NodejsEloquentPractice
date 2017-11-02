var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var fields = [];

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayWindow(res);
    } else if (req.method.toLowerCase() == 'post') {
        getCode(req, res);
        displayWindow(res);
  
    }
});

function displayWindow(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}


function getCode(req, res) {
    
    var form = new formidable.IncomingForm();
    
    form.on('field', function (field, value) {
        fields[field] = value;
    });
    
    var stream = fs.createWriteStream("code.js");
    stream.once('open', function(fd) {
      stream.write(fields["code"]);
      stream.end();
    });

    var exec = require('child_process').exec;
    exec('node ./code.js', function(error, stdout, stderr) {
        var stream = fs.createWriteStream("output.txt");
        stream.once('open', function(fd) {
         // fields["output"]=stdout; 
          if(error.message.length>0)
          {
            stream.write(stderr);
            fields["output"]=stderr;  
          }
          else
          { stream.write(stdout);
            fields["output"]=stdout; 
          } 
          stream.end();
        });
        
    });
    
    form.parse(req);
}

server.listen(7000);