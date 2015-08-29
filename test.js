/*!
 * npmls <https://github.com/tunnckoCore/npmls>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('ava')
var npmls = require('./index')

test('list all global modules (sync) if `callback` given, but not function', function (t) {
  t.true(npmls(123).length >= 1)
  t.end()
})
test('list all global modules (sync)', function (t) {
  t.true(npmls().length >= 1)
  t.end()
})
test('list all global modules (async)', function (t) {
  t.plan(3)
  npmls(function (err, res) {
    t.error(err)
    t.is(Array.isArray(res), true)
    t.true(res.length)
  })
})
test('list all local modules (sync)', function (t) {
  t.true(npmls(true).length >= 1)
  t.end()
})
test('list all local modules (async)', function (t) {
  t.plan(3)
  npmls(true, function (err, res) {
    t.error(err)
    t.is(Array.isArray(res), true)
    t.true(res.length >= 1)
  })
})
