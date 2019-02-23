'use strict';

const {pipeline, Readable} = require('stream');
const {promisify} = require('util');

const emptyDirectoryTar = require('.');
const {list} = require('tar');
const test = require('tape');

test('emptyDirectoryTar', async t => {
	const entries = [];

	await promisify(pipeline)(new Readable({
		read() {
			this.push(emptyDirectoryTar);
			this.push(null);
		}
	}), list({strict: true}).on('entry', entry => entries.push(entry)));

	t.equal(
		entries.length,
		1,
		'should only contain a single entry.'
	);

	const [{path, type}] = entries;

	t.equal(
		type,
		'Directory',
		'should contain a directory.'
	);

	t.equal(
		path,
		'directory/',
		'should contain a `directory/` entry.'
	);

	t.end();
});
