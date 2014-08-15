
function getWord(req, res, tokens) {
	console.log(tokens);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var result = tokens.word
  	res.end(result);
}

module.exports = {
	getWord: getWord
}