/*var a = 10
function a(){
	console.log(a)
	var a = 20
}
a()
*/

var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

client.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);
});

client.get('framework', function(err, reply) {
    console.log(reply);
});

client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('frameworks', function(err, object) {
    console.log(object);
});

client.hmset('frameworks', {
    'javascript': 'AngularJS',
    'css': 'Bootstrap',
    'node': 'Express'
});

client.rpush(['frameworks', 'angularjs', 'backbone'], function(err, reply) {
    console.log(reply); //prints 2
});

client.lrange('frameworks', 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});

client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs'], function(err, reply) {
    console.log(reply); // 3
});

client.smembers('tags', function(err, reply) {
    console.log(reply);
});

client.exists('key', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});

client.del('frameworks', function(err, reply) {
    console.log(reply);
});

client.set('key1', 'val1');
client.expire('key1', 30);

client.set('key1', 10, function() {
    client.incr('key1', function(err, reply) {
        console.log(reply); // 11
    });
});
