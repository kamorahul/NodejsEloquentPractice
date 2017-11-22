'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.register(require('inert'), (err) => {
if (err) {
throw err;
};

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
	    reply.file('./index.html');
}
});

});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function (request, reply) {
	reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});





