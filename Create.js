var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var Data = [
		{ empId: 'E 101',firstName: 'Arpit', lastName: 'Gautam' },
		{ empId: 'E 102',firstName: 'Donnie', lastName: 'Darko' },
		{ empId: 'E 103',firstName: 'Mohd.', lastName: 'Atif' },
		{ empId: 'E 104',firstName: 'Himanshu', lastName: 'Kashyap' },
		{ empId: 'E 105',firstName: 'Zeviku', lastName: 'Khatso' },
		{ empId: 'E 106',firstName: 'Michael', lastName: 'Corleone' },
		{ empId: 'E 107',firstName: 'sontino', lastName: 'Corleone' },
		{ empId: 'E 108',firstName: 'Vito', lastName: 'Corleone' },
		{ empId: 'E 109',firstName: 'Vincent', lastName: 'Corleone' },
		{ empId: 'E 110',firstName: 'Bruce', lastName: 'Wayne' },
		{ empId: 'E 111',firstName: 'Arpit', lastName: 'Gautam' }
	    	
];
 db.collection("kukami").insertMany(Data, function(err, res) 
  {
  	  if (err) throw err;
 	  console.log(" Inserted: ");
		console.log(res.insertedCount);
    db.close();
  });

});
