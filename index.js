#!/usr/bin/env node
/*!
 * npmls <https://github.com/tunnckoCore/npmls>
 * List all installed node (npm) modules, via streaming, based on `process.cwd()`
 * 
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var readdirp = require('readdirp'),
    through2 = require('through2'),
    path = require('path'),
    src = path.join(process.cwd(),'node_modules'),
    repeatString = require('repeat-string'),
    npmls = '\x1b[36m\x1b[1m[npmls]\x1b[22m\x1b[39m ',
    modules = {},
    stream = readdirp({
      root: src,
      directoryFilter: [
        '!lib',
        '!examples',
        '!example',
        '!bin',
        '!test',
        '!node_modules',
        '!.bin',
        '!.git',
        '!completion'
      ],
      fileFilter: [
        'package.json'
      ]
    }),
    i = 0;

stream
  .pipe(through2.obj(function (file, _, next) {
    var str = npmls + file.parentDir + '\n';
    i++;
    this.push(str)
    next()
  }, function (err) {
    console.log(repeatString('-', 25))
    console.log(npmls + 'Found', i, 'modules.')
  }))
  .pipe(process.stdout);
