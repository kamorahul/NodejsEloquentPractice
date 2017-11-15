var http=require('http');
var data=require('./data');

//Creating server

http.createServer(function(req,res){
var link=req.url;
  if(req.url==='/'){
    res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Welcome Home");}

  else if(req.url.match(/[/]login[?][$][a-z]*[=][A-Za-z0-9]*&[$][A-Za-z0-9]*=[A-Za-z0-9]*/g)){
    res.writeHead(200, {"Content-Type": "text/plain"});


// for username
var z=link.substring(link.search(/[A-Za-z0-9]*[&]/g));
var user=z.substring(0,z.indexOf('&'));

// for password
var y=z.substring(z.search(/[&]/g));
var pass=y.substring(y.indexOf("=")+1);

// Authenticating user
if(user==data.username && pass==data.password){
res.end("Login successful")
  }
  else if(user!=data.username && pass==data.password){
  res.end("Oops!! wrong username")
    }

    else if(user==data.username && pass!=data.password){
    res.end("Oops!! wrong password")
      }
      else {
        res.end("User does not exist.")
      }
}

else{
  res.end("wrong url..! Try again!")
}
}).listen(3000);
