# empty-directory-tar

[![npm version](https://img.shields.io/npm/v/empty-directory-tar.svg)](https://www.npmjs.com/package/empty-directory-tar)
[![Build Status](https://travis-ci.com/shinnn/empty-directory-tar.svg?branch=master)](https://travis-ci.com/shinnn/empty-directory-tar)

A [Node.js](https://nodejs.org/) [`Buffer`](https://nodejs.org/api/buffer.html#buffer_class_buffer) of a [Tar](https://www.gnu.org/software/tar/manual/html_node/Standard.html) archive which only contains a single `directory` directory

```javascript
const emptyDirectoryTar = require('empty-directory-tar');
const {list} = require('tar');

list().on('entry', entry => {
  entry.type; //=> 'Directory'
  entry.path; //=> 'directory/'
}).end(emptyDirectoryTar);
```

Useful for testing if a library or an application correctly decompress a Tar archive.

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install empty-directory-tar
```

## API

```javascript
const emptyDirectoryTar = require('empty-directory-tar');
```

### emptyDirectoryTar

Type: `Buffer`

## License

[MIT No Attribution](./LICENSE) © 2019 Shinnosuke Watanabe
