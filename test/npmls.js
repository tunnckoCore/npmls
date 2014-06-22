/**
 * npmls - test/npmls.js
 * Copyright (c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @api private
 */
'use strict';
var assert = require('assert');
var npmls = require('../index');

it('should find all installed local packages', function () {
  npmls(null, null, function(result, n) {
    assert.equal(n, 6);
  });
});
