var wordService = require('../service/wordService');

module.exports = function(routes) {
	routes['/`word`'] = {
		GET: function(req, res, tokens) {
			return wordService.getWord(req, res, tokens);
		}
	}

}