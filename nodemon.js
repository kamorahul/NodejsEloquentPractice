var fs=require('fs');
check(".");
function check(p1)
{
    var arr=fs.readdirSync(p1);
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=p1+"/"+arr[i];
        if(fs.statSync(fs.realpathSync(arr[i])).isDirectory())
        {
         check(arr[i]);   
        }
        else{
            wtch(arr[i]);
        }
    }
}
function wtch(p4)
{
    fs.watchFile(p4, function(event,filename)
{
console.log("File changed: "+p4);
console.log("Server restarted!!");
});
}
