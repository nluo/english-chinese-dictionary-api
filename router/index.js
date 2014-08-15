var beeline = require('beeline');
var routes = {
    "/": function(req, res) {
        console.log(' / directory is called ');
    }
};

module.exports = beeline.route(routes);