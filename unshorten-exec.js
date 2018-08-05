#!/usr/bin/env node
{
  const unshorten = require('./unshorten');
  const [,, ...paths] = process.argv;

  if (paths.length) {
    paths.forEach(path => unshorten(path));
  } else {
    console.error("URL not provided.");
  }
}
