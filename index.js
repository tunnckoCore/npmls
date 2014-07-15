#!/usr/bin/env node
/*!
 * npmls <https://github.com/tunnckoCore/npmls>
 * Streaming list of installed node modules. More compact and small.
 * Support N and NVM version managers.
 * 
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var readdirp = require('readdirp');
var through2 = require('through2');
var path = require('path');
var fs = require('fs');
var npmls = '\x1b[36m\x1b[1m[npmls]\x1b[22m\x1b[39m ';
var nPath = '/usr/local/n/versions';
var isN = fs.existsSync(nPath);
var isNvm = fs.existsSync(process.env.NVM_DIR);
var isGlobal = process.argv[2] === '-g' ? true : false;
var start, src, nvm, n, i=0;

if (isGlobal) {
  if (isNvm) {
    nvm = path.join(process.env.NVM_DIR, process.version,'lib');
  } else if (isN) {
    n = path.join(nPath, process.version.slice(1),'lib');
  }
  if (isNvm && isN) {
    src = nvm;
  } else if (isNvm && !isN) {
    src = nvm;
  } else if (!isNvm && isN) {
    src = n;
  }
} else {
  src = process.cwd();
}

readdirp({
  root: path.join(src,'node_modules'),
  directoryFilter: [
    '!lib',
    '!lib-cov',
    '!examples',
    '!example',
    '!bin',
    '!test',
    '!tests',
    '!node_modules',
    '!bower_components',
    '!components',
    '!.bin',
    '!.git',
    '!completion',
    '!coverage',
    '!tmp',
    '!temp'
  ],
  fileFilter: [
    'package.json'
  ]
})
.pipe(through2.obj(function (file, _, next) {
  if (!start) {start = Date.now();}
  var moduleName = npmls + path.basename(file.parentDir) + '\n';
  i++;
  this.push(moduleName);
  next();
}, function () {
  console.log('-------------------------');
  console.log(npmls + 'Found', i, 'modules.','(' + (Date.now() - start) + 'ms)');
}))
.pipe(process.stdout);
