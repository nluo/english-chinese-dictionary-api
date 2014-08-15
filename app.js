var http = require('http'),
	server = http.createServer(),
    router = require("./router"),
	port = 8080;


server.on('request', function(request, response){
	router(request, response);
});


server.listen(port, function(error){
	console.log('Listening on port: ', port);
});