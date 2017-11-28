const express = require('express');
const app = express();

const ageService = require('./age-service');

app.get('/', function(req, res) {
 
  /*
   Here we get name from request query, for eg: localhost:3000/?name=atif
   would give "atif" as the name
  */
  const {name} = req.query
  ageService(name, age => {

  /*
     Once we get age sent it to client as a response
   */
      res.end(age)
    })
});

app.listen(3000, function() {
  console.log('App listening on port 3000');
});


/*
To test this run 
 node index1.js
 curl -w "\ntime taken : %{time_total}\n" "http://localhost:3000/?name=Atif"
 multiple times.
 If data is present in cache then everytime it shows decreased time.
*/
