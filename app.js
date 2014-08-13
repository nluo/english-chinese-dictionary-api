var http = require('http'),
	server = http.createServer(),
	port = 8080;


server.on('request', function(request, response){
	
});


server.listen(port, function(error){
	console.log('Listening on port: ', port);
});