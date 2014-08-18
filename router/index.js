var beeline = require('beeline');
var connect = require('connect');

var retorter = require('retort')({
    ok: function(request, response, data){
        response.statusCode = 200;
        // We are building a JSON API, so always stringify.
        response.end(JSON.stringify(data));
    },
    error: function(request, response, error){
        console.log(error);
        response.statusCode = 500;
        response.end(JSON.stringify(error));
    }
});

var routes = {
    "/": retorter(function(retort, tokens) {
        console.log(retort.request.body);
        retort.ok("hello");
    })
};

require('./wordRoutes')(routes);

module.exports = beeline.route(routes);