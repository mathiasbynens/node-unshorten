{
	const parseUrl = require('url').parse,
		    http = require('http'),
		    https = require('https');

	module.exports = (url, callback = null) => {
		const { protocol, host, path } = parseUrl(url);

		if (protocol && host && path) {
			(protocol === 'https:' ? https : http).request(
				{
					method: 'HEAD',
					agent: false,
					host,
					path,
				},
				response => {
					(callback || console.log)(response.headers.location || url);
				}
			).on('error', error => {
				console.error(
					error.message === 'getaddrinfo ENOTFOUND'
						? `URL cannot be resolved: ${ url }`
						: error.stack
				);
			}).end();
		} else {
			console.error(`URL invalid or malformed: ${ url }`);
			(callback || console.log)(url);
		}
	}
}
