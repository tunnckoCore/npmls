#!/usr/bin/env node
/**
 * npmls - bin/npmls.js
 * Copyright (c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @api private
 */
var pkg   = require('../package.json'),
    npmls = require('../index'),
    flag  = process.argv[2];

function help() {
  console.log([
    pkg.description,
    '',
    'Usage',
    '  $ npmls',
    '',
    'Example',
    '  $ npmls',
    '  name        ver  ',
    '  ----------  -----',
    '  easy-table  0.3.0',
    '  username    4.1.1',
    '  underscore  1.3.7',
    '',
    'Options',
    '  -g, --global      List all Node global installed modules.',
    '  -h, --help        Display this help information.',
    '  -v, --version     Display current package version.',
    '  --nvm <version>   List current nvm modules.',
    ''
  ].join('\n'));
}

if (flag == '-h' || flag == '--help') {
  help();
  return;
}

if (flag == '-v' || flag == '--version') {
  console.log(pkg.version);
  return;
}

if (flag == '-g' || flag == '--global') {
  npmls('global', null, function (result, n) {
    console.log('Found ' + n + ' top-level modules')
    console.log(result)
  })
  return;
}

if (flag == '--nvm' && process.argv[3]) {
  npmls('nvm', process.argv[3], function (result, n) {
    console.log('Found ' + n + ' top-level modules')
    console.log(result)
  })
  return;
}

if (!flag) {
  npmls(null, null, function (result, n) {
    console.log('Found ' + n + ' top-level modules')
    console.log(result)
  })
  return;
}
