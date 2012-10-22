var unshorten = require('./unshorten.js');

//---

function returnUrlUnshorted(url) {
  console.log( 'end\t: ' + url);
}

function urlService(url) {
  //unshorten(url, returnUrlUnshorted);
  unshorten(url, returnUrlUnshorted, true);
}

//---

//urlService('http://mths.be/unshorten');

urlService('http://t.co/04ykj8pz');
/*
output with trace

1 : http://t.co/04ykj8pz
2 : http://fb.me/1kpRTSQxO
url : http://www.giantflyingsaucer.com/blog/?p=3950  ms: 1103

end : http://www.giantflyingsaucer.com/blog/?p=3950
*/