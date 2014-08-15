var beeline = require('beeline');
var routes = {
    "/": function(req, res) {
        console.log(' / directory is called ');
    }
};

require('./wordRoutes')(routes);

module.exports = beeline.route(routes);