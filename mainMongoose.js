var fun = require('./mymongoose');
var z = require('./schema1');
fun.schema(z.user);
fun.insert('data',z.user_1);
fun.display('data')