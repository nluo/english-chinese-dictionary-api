
function getWord(req, res, tokens) {
	console.log(tokens);
	// res.writeHead(200, {'Content-Type': 'textjson'});
	var result = {};
	result.word = tokens.word;
	result.okay = " have a nice day";

  	res.end(JSON.stringify(result));
}

module.exports = {
	getWord: getWord
}