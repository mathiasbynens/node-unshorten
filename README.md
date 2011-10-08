# Unshorten

A simple URL unshortener for [Node.js](http://nodejs.org/).

## Example usage

```js
var unshorten = require('./unshorten.js');
unshorten('http://mths.be/unshorten', function(url) {
	console.log(url + ' is where it’s at!');
});
```

## Credits

Made for fun (and to get more familiar with Node) by [Mathias](http://mathiasbynens.be/).