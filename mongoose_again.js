//supported for only Js types
var fun = require('./funcs');
var tc = require('./testcases');
fun.schema(tc.user);
fun.insert('something',tc.user_test);
fun.display('something')
