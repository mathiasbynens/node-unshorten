(function() {

	var urlLibrary = require('url'),
	    http = require('http'),
	    https = require('https');

	function unshorten(url, callback) {
		var request;
		url = urlLibrary.parse(url);
		request = ('https' == url.protocol ? https : http).request(
			{
				'headers': 't.co' == url.host ? {} : { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_1) AppleWebKit/535.5 (KHTML, like Gecko) Chrome/16.0.894.0 Safari/535.5' },
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

	exports.expand = unshorten;

}());