# Unshorten

A simple URL unshortener for [Node.js](https://nodejs.org/).

## Example usage

```js
const unshorten = require("./unshorten.js");
unshorten('https://mths.be/unshorten', function(url) {
	console.log(url, "is where it's at!");
});
```

...or, via [npm](https://npmjs.org/):

```bash
npm install unshorten
```

...and then:

~~~ js
const unshorten = require("unshorten");
unshorten('https://mths.be/unshorten', function(url) {
	console.log(url, "is where it's at!");
});
~~~

...or as a command-line tool:

```bash
# install it:
npm install --global unshorten
# then run it:
unshorten https://mths.be/unshorten
# you can even pass it multiple URLs at once:
unshorten https://mths.be/unshorten http://youtu.be
```

## Credits

Made for fun (and to get more familiar with Node) by [Mathias](https://mathiasbynens.be/).