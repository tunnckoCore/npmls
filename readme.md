# npmls
> Streaming list of installed node modules. More compact and small. Support N and NVM version managers.

[![NPM version][npmjs-shields]][npmjs-url]
[![Using ferver][ferver-img]][ferver-url]
[![Build Status][travis-img]][travis-url]
[![Dependency Status][depstat-img]][depstat-url]


## Install [![Nodei.co stats][npmjs-install]][npmjs-url] 

> Install with [npm](https://npmjs.org)

```
$ npm install -g npmls
```

# Usage
### list locally modules
```
$ npmls
```
yields
```
[npmls] async
[npmls] extend
[npmls] galaxy
[npmls] galaxy-stack
[npmls] galaxy-streams
[npmls] graceful-fs
[npmls] handlebars
[npmls] js-code-context
[npmls] koa
[npmls] koa-better-body
[npmls] mkdirp
[npmls] docks
[npmls] randomorg-js
[npmls] readdirp
[npmls] through2
-------------------------
[npmls] Found 15 modules. (52ms)
``````
### list globally modules
```
$ npmls -g
```
yields
```
[npmls] bower
[npmls] gulp
[npmls] jsdoc
[npmls] jshint
[npmls] jsontool
[npmls] mocha
[npmls] npm
[npmls] should
[npmls] npmls
-------------------------
[npmls] Found 9 modules. (27ms)
```

## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]
**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/npmls/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[mocha-url]: https://github.com/visionmedia/mocha

[contrib-url]: https://github.com/tunnckoCore/npmls/graphs/contributors
[npmjs-url]: http://npm.im/npmls
[npmjs-shields]: http://img.shields.io/npm/v/npmls.svg
[npmjs-install]: https://nodei.co/npm/npmls.svg?mini=true

[license-url]: https://github.com/tunnckoCore/npmls/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/npmls
[travis-img]: https://travis-ci.org/tunnckoCore/npmls.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/npmls
[depstat-img]: https://david-dm.org/tunnckoCore/npmls.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore

[ferver-img]: http://img.shields.io/badge/using-ferver-585858.svg
[ferver-url]: https://github.com/jonathanong/ferver

[n-url]: https://github.com/visionmedia/n
[nvm-url]: https://github.com/creationix/nvm
