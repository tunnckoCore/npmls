npmls [![Build Status](https://travis-ci.org/tunnckoCore/npmls.png)](https://travis-ci.org/tunnckoCore/npmls) [![Dependencies Status](https://david-dm.org/tunnckoCore/npmls/status.svg)](https://david-dm.org/dlau/npmls) [![Coverage Status](https://coveralls.io/repos/tunnckoCore/npmls/badge.png?branch=master)](https://coveralls.io/r/tunnckoCore/npmls?branch=master)
================

> List global/local npm installed packages, more compact and simple.


## Install
> Install [`package/npmls`](http://npm.im/npmls) with [npm](https://npmjs.org)

```
$ npm install npmls
```


## Usage
```js
var npmls = require('npmls');

npmls('global', null, function (result, n) {
  console.log('Found ' + n + ' modules')
  console.log(result)
})

npmls('nvm', '0.11.13', function (result, n) {
  console.log('Found ' + n + ' modules')
  console.log(result)
})
```

## API

### npmls(type, version, callback)

#### type

*Required*  
Type: `string|null`

#### version

*Required*  
Type: `string|null`

#### callback

*Required*  
Type: `function`


## CLI
```
$ npm install --global npmls
```
```
List global/local npm installed packages, more compact and simple.

Usage
  $ npmls

Example
  $ npmls
  name        ver  
  ----------  -----
  easy-table  0.3.0
  username    4.1.1
  underscore  1.3.7

Options
  -g, --global      List all Node global installed modules.
  -h, --help        Display this help information.
  -v, --version     Display current package version.
  --nvm <version>   List current nvm modules.
```

## Mocha (test), Istanbul (coverage), JSHint (lint)
> You can run it through `npm run`

```
$ npm test
$ npm run cov
$ npm run lint
```
or through `make` file
```
$ make test
$ make cov
$ make lint
```

## License
The MIT License, 2014 [Charlike Mike Reagent](https://github.com/tunnckoCore) ([@tunnckoCore](https://twitter.com/tunnckoCore))
***
_This file was rebuild with [`Ock`](https://github.com/tosckjs/ock) on June 22, 2014._
