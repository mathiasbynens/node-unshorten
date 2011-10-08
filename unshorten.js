(function() {

	var urlLibrary = require('url'),
	    http = require('http'),
	    https = require('https');

	function unshorten(url, callback) {
		url = urlLibrary.parse(url);
		('https' == url.protocol ? https : http).request(
			{
				'method': 'HEAD',
				'host': url.host,
				'path': url.pathname
			},
			function(response) {
				if (~[301, 302].indexOf(response.statusCode)) {
					(callback || console.log)(response.headers.location);
					return;
				}
			}
		).end();
	}

	module.exports = unshorten;

}());