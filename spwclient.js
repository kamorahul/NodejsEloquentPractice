var http = require('http');
// var fs = require("fs");
// fs.readFile('ax.js', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Reading: " + data.toString());
// });

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '9000',
   path: '/server.html'  
};


// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();