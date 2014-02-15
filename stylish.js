'use strict';
var chalk = require('chalk');
var table = require('text-table');

module.exports = {
	reporter: function (result, config, options) {
		var total = result.length;
		var ret = '';
		var headers = [];
		var prevfile;

		options = options || {};

		ret += table(result.map(function (el, i) {
			var err = el.error;
			var line = [
				chalk.yellow('jshint -' + err.code),
                chalk.gray(err.id.slice(1,-4)), // remove first and last char
                chalk.gray('col ' + err.character),
				chalk.blue('line ' + err.line),
				chalk.green(err.reason)
			];

			if (el.file !== prevfile) {
				headers[i] = el.file;
			}

			if (options.verbose) {
				line.push(chalk.gray('(' + err.code + ')'));
			}

			prevfile = el.file;

			return line;
		})).split('\n').map(function (el, i) {
			return headers[i] ? '\n' + chalk.underline(headers[i]) + '\n' + el : el;
		}).join('\n') + '\n\n';

		if (total > 0) {
			ret += chalk.red.bold((process.platform !== 'win32' ? '✖ ' : '') + total + ' problem' + (total === 1 ? '' : 's'));
		} else {
			ret += chalk.green.bold((process.platform !== 'win32' ? '✔ ' : '') + 'No problems');
			ret = '\n' + ret.trim();
		}

		console.log(ret + '\n');
	}
};
