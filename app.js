var http = require('http'),
	server = http.createServer(),
    router = require("./router"),
	port = 8080;


var beeline = require('beeline');
var connect = require('connect');

var app = connect();


// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use(function(req, res){
    router(req, res);
});


//create node.js http server and listen on port
http.createServer(app).listen(8080)