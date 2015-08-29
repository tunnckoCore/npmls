#!/usr/bin/env node
/*!
 * npmls <https://github.com/tunnckoCore/npmls>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var npmls = require('./index')
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    g: 'global',
    v: 'version',
    h: 'help'
  }
})

if (argv.h) {
  console.log([
    'Usage: npmls [options]',
    '',
    'Example',
    '  $ npmls',
    '  minimist',
    '  global-modules',
    '  ...',
    '',
    'Options',
    '  -v, --version    Shows module version',
    '  -g, --global     Lists globally installed modules',
    '  -h, --help       Shows this help',
    '',
    'Readme: https://github.com/tunnckoCore/npmls'
  ].join('\n'))
  process.exit(0)
}

if (argv.v) {
  console.log(require('./package.json').version)
  process.exit(0)
}

npmls(argv.g, function (err, modules) {
  if (err) {
    console.log(err.message)
    return
  }
  modules.forEach(function (name, i) {
    console.log(i + 1 + '.', name)
  })
})
