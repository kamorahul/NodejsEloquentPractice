var fs= require('fs');
var ht=require('./create.js');
 var path='/home/shubham/Desktop/shubham';
 var filelist=[];
var dirlist=[];
var fork = require('child_process').fork;
 var file = fork(ht);
 var regex= /[A-Za-z](.js)$/;//only keep watch on js file
 function getfile(path)
 {
     var list=fs.readdirSync(path);
     for(i in list)
      {
     if(fs.statSync(path+'/'+list[i]).isFile())//checking file
             {
             filelist.push(list[i])
             if(list[i].match(regex))
                   {
                   
                   fs.watchFile(list[i], (curr, prev) =>
                         {
                     file.kill();
                   console.log("server stopped!");
                    file=fork(ht);
                   console.log('server restarted!');
                   });
                 }
             }
   if(fs.lstatSync(path+'/'+list[i]).isDirectory())//checking Directory
         {
        dirlist.push(list[i]);
         var repath=path+'/'+list[i];
         getfile(repath);
         }
 }
 }
 getfile(path)
