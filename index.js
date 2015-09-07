/*!
 * npmls <https://github.com/tunnckoCore/npmls>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('fs')
var path = require('path')
var modules = require('global-modules')
var cwd = process.cwd()

/**
 * List installed node modules, globally or locally.
 *
 * **Example**
 *
 * ```js
 * var npmls = require('npmls')
 *
 * console.log(npmls())
 * //=> [ 'add-package-owners',
 * //  'apidocs-cli',
 * //  'bower',
 * //  'boy',
 * //  'browserify',
 * //  ...
 * // ]
 *
 * // or asynchronously
 * npmls(function (err, modules) {
 *   if (err) return console.error(err)
 *
 *   console.log(modules)
 *   //=> [ 'add-package-owners',
 *   //  'apidocs-cli',
 *   //  'bower',
 *   //  'boy',
 *   //  'browserify',
 *   //  ...
 *   // ]
 * })
 * ```
 *
 * @name  npmls
 * @param  {Boolean}  `[globally]` list global modules, default `false`
 * @param  {Function} `[callback]` node-style callback
 * @return {Array} list of modules if nod callback given
 * @api public
 */
module.exports = function npmls (globally, callback) {
  if (typeof globally === 'function') {
    callback = globally
    globally = false
  }
  var fp = globally === true ? modules : path.join(cwd, 'node_modules')

  if (typeof callback !== 'function') {
    return cleanup(fs.readdirSync(fp))
  }
  readAsync(fp, callback)
}

function readAsync (fp, callback) {
  fs.readdir(fp, function (err, packages) {
    callback(err, cleanup(packages))
  })
}

function cleanup (res) {
  return res && res[0] === '.bin' ? res.slice(1) : res
}
