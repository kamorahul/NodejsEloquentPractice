const fs=require("fs");
const fileRead=()=>{
        return new Promise((resolve,reject)=>{
            fs.readFile(__dirname+"/code.js","utf8",(err,data)=>{
                return err?reject(err):resolve(data);
                
            });
        });
    }
const fileWrite=(data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(__dirname+"/code.js",data,(err,data)=>{
            return err?reject(err):resolve(data);
        });
    });
}
module.exports={
    fileRead,
    fileWrite
}