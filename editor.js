const express = require("express");
const {
    spawn
} = require("child_process");
const bodyparser = require("body-parser");
const read_write = require("./read_write");


const app = express();
app.use(bodyparser.text());
app.post('/', (req, res) => {
    const code = req.body;
    read_write.fileWrite(code).then(
        () => {
            const cp = spawn("node", ["code.js"]);
            cp.stdout.on("data", (data) => {
                console.log(`Stdout: ${data.toString() }`);
            });
            cp.stderr.on('data', (data) => {
                console.log(`Error : ${data}`);
            })

        }
    ).catch(
        e => console.log(e)
    );

    res.send("done");
})
app.listen(4000, () => {
    console.log(`my server is running..`);
})




























// const {spawn} =require("child_process");
// const cp=spawn("node",["test.js"]);
// cp.stdout.on("data",(data)=>{
// console.log(`Stdout: ${data.toString() }`);
// });

// cp.on("close",()=>{
//     console.log("Child process has been closed");
//     process.exit();
// });

// setTimeout(()=>{
// cp.stdin.write("stop");
// },1000);

// const fs=require("fs");

// const fileRead=()=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(__dirname+"/test.js","utf8",(err,data)=>{
//             return err?reject(err):resolve(data);

//         });
//     });
// }
// fileRead().then(
//    data=>console.log("data:"+data)
// ).catch(
//     e=>console.log(e)
// )
