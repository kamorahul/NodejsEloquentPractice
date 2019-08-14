var fs = require('fs');
const path = require('path');

function traverseDirectory(dirname, callback) {
  var directory = [];
  fs.readdir(dirname, function(err, list) {
    if (err) {
      return callback(err);
    }
    var listlength = list.length;
    list.forEach(function(file) {
      file = dirname + '/' + file;
      fs.stat(file, function(err, stat) {
        if(path.extname(file)=='.js'){
        directory.push(file);
      }
 if (stat && stat.isDirectory()) {
          traverseDirectory(file, function(err, parsed) {
     directory = directory.concat(parsed);
     if (!--listlength) {
       callback(null, directory);
     }
   });
 } else {
     if (!--listlength) {
       callback(null, directory);
     }
          }
      });
    });
  });
}
traverseDirectory('.', function(err, result) {
  if (err) {
    console.log(err);
  }
    console.log(result);
    for (i = 0; i < result.length; i++) { 
    fs.watch(`${result[i]}`,(event,filename)=>{
        console.log(`Someone is altering \n event type is: ${event}`);
         if (filename) {
                console.log(`filename provided: ${filename}`);
                } else {
                  console.log('filename not provided');
                  }
        });

    //console.log(result[i]);
    }
});
