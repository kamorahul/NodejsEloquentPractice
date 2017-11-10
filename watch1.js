var fs= require('fs')
var path='/home/aditya/Documents/JsPractice'
var filelist=[];var dirlist=[]
var filecount=0
var regex= /[a-z](.js)$/
function getfd(path)
{
  var list=fs.readdirSync(path);
  for(i in list){
    if(fs.statSync(path+'/'+list[i]).isFile())
            {
            filelist.push(list[i])//if its file apply fswatch else make recpath and pass the string back for recursion
            if(list[i].match(regex))
                  {
                  filecount++;
                  fs.watchFile(list[i], (current, prevent) => {
                  console.log(`${list[i]} is modified -----> ${current.mtime}`);
                  console.log('server restarted!');
                  });
                }
            }
    if(fs.statSync(path+'/'+list[i]).isDirectory())
        {
        dirlist.push(list[i]);
        var recpath=path+'/'+list[i];
        getfd(recpath);
        }
}
}
getfd(path)