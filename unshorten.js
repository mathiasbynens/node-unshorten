(function() {

	var parseUrl = require('url').parse,
	    http = require('http'),
	    https = require('https');

	function unshorten(url, callback) {
		var urlParts = parseUrl(url),
		    protocol = urlParts.protocol,
		    host = urlParts.host,
		    path = urlParts.pathname;
		if (protocol && host && path) {
			('https:' == protocol ? https : http).request(
				{
					'method': 'HEAD',
					'host': host,
					'path': path
				},
				function(response) {
					(callback || console.log)(response.headers.location || url);
				}
			).end();
		} else {
			console.error('Not a valid URL: ' + url);
			(callback || console.log)(url);
		}
	}

	module.exports = unshorten;

}());