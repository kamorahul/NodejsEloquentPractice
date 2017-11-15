var http=require('http');
var data={
  "username":["siddharth"],
  "password":["abc123"]
};


http.createServer(function(req,res){
var link=req.url;
console.log("server started listening on port 3000");
  if(req.url=='/')
  {
    res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(" Welcome User"+ "\nSignup using following format: localhost:3000/signup?$uname=xyz&$pass=xyz&$rpass=xyz"+
"\n Login using following link: localhost:3000/login?$uname=xyz&$pass=xyz"+"\n Default uname=siddharth and pass=abc123" );
  }
  else if(req.url.match(/[/]login[?][$]uname=[A-Za-z0-9]*&[$]pass=[A-Za-z0-9]*/g))
  {
   login(link);
 }

 else if(req.url.match(/[/]signup[?][$]uname=[A-Za-z0-9]*&[$]pass=[A-Za-z0-9]*[&][$]rpass=[A-Za-z0-9]*/g)) {
    usersignup(req.url);
   }

   else{
     res.end("Wrong url");
   }



 function login(link) {
// for username and password
 var user=link.substring(link.search(/[$]uname/g)+7,link.indexOf('&',link.search(/[$]uname/g)));
var pass=link.substring(link.indexOf('&',link.search(/[$]uname/g))+7);
console.log(user,pass);
 // Authenticating user
auth(user,pass);
 }// end of login

function auth(user,pass){

  for (i of data.username) {
  if(user==i){
    if(data.password[data.username.indexOf(i)]==pass){
      res.end("Login Successful");
      break;
    }
    else{
      res.end("Wrong Password");
      break;
    }
  }
}
}

function usersignup(link){

  var signupUser=link.substring(link.search(/[$]uname/g)+7,link.indexOf('&',link.search(/[$]uname/g)));
   var signupPass=link.substring(link.indexOf('&',link.search(/[$]uname/g))+7,link.indexOf('&',link.search(/[$]pass/g)));
   var signupRpass=link.substring(link.indexOf('&',link.search(/[$]pass/g))+8);
   console.log(signupUser,signupPass,signupRpass);
    data.username.push(signupUser);
    data.password.push(signupPass);
    console.log(data);
    res.end("Successfully registered");
    }





function validate(signupUser,signupPass,signupRpass){

  if(signupUser.match(/[A-Za-z0-9]/g) && signupPass.match(/[A-Za-z0-9]/g)){
    if(signupPass==signupRpass) re=true;
    else return false;
  }
  else return false;
}




}).listen(3000);
