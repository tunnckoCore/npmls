/**
 * npmls - lib/npmls.js
 * Copyright (c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @api private
 */
'use strict';
var Table = require('easy-table'),
	  exec  = require('child_process').exec;

module.exports = function(type, version, callback) {
	var cmd = 'npm ls', nvm = false;
	if (type === 'global') {
		cmd = cmd + ' -g --json';
	} else if (type === 'nvm' && version) {
		cmd = 'ls ~/.nvm/v' + version + '/lib/node_modules/';
		nvm = true;
	} else {
		cmd = cmd + ' --json';
	}
	exec(cmd, function(err, stdout) {
		var mm = nvm ? stdout.split(/\r?\n/gim).slice(0, -1) : JSON.parse(stdout).dependencies,
        t = new Table(), i = 0;
		for (var key in mm) {
			t.cell('name', nvm ? mm[key] : key);
			t.cell('ver', nvm ? 'n/a' : mm[key].version);
			t.newRow();
			i++;
		}
		callback(t.toString(), i);
	});
};
