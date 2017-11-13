var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.once('connected',function(){
console.log('connected successfully')
})
