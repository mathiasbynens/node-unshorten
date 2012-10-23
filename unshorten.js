module.exports = (function() {
  var parseUrl = require('url').parse,
      http = require('http'),
      https = require('https');

  var shortedUrlPattern = /(http|https):\/\/([a-z0-9-]+((\.[a-z0-9-]+)+)?)(:[0-9]+)?(\/([a-zA-Z0-9]{1,4}))?(\/([a-zA-Z0-9]{5,32}))$/;

  function callUrl(url, callback) {
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

  function unshorten(url, callback, trace) {
    var steps = 1
      , ms = new Date();

    function checkUrl(url) {
      if(shortedUrlPattern.test(url)) {
        if(trace) console.log( steps++ + '\t: ' + url);

        callUrl(url, checkUrl);
      } else {
        if(trace) console.log('url\t: ' + url + '\t ms: ' + (new Date() - ms));

        (callback || console.log)(url);
      }
    };

    checkUrl(url);
  }

  return unshorten;
})();