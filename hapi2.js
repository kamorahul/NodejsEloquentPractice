const hapi=require('hapi');
const server=new hapi.Server();
server.connection({
	port:3000,
	host:'localhost'
});
server.route({
	method:'GET',
	path:'/',
	handler:function(req,rep){
		rep('hello !!!');
	}
});
server.route({
	method:'GET',
	path:'/{name}',
	handler:function(req,rep){
		rep('hello, '+encodeURIComponent(req.params.name)+' good morning');
	}
});
server.start((err)=>{
	if(err){
		throw err;

	}
	console.log('server running at : ${server.info.uri}');
});
