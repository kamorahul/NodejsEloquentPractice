var randomstring = require("randomstring");
var rn = require("random-number");
var MongoClient = require('mongodb').MongoClient
MongoClient.connect("mongodb://localhost:27017/dineshDatabase", function (err, db){
db.collection('details',function(err,collection){
var y = 0 ;var x = 1;
for(var i = 1; i <= 5; i++){                        // i <= 500
for(var j = 1+y; j <= 20+y ; j++){                  // j <= 200
//if(i > 0+y && i <= 200+y)
var xyz = randomstring.generate(  {length : 5,charset : 'alphabetic'});
var gen = rn.generator({ min:  1000, max:  5000, integer: true})
var xz = gen();

collection.insert({'Uid':xz,'Name':xyz,'roll':j,'section':x});
} y = y + 20; x = x + 1;
}
//console.log(xyz,xz);}
db.collection('details').count(function(err,count)
{
console.log('Entries present in DB',count)
db.close()
})

})
})


/*
db.collection('details').count(function(err,count)
{
if(err)throw err;
console.log('Entries present in DB',count)
db.close()
})
})
})
*/
