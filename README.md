# [npmls][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Opinionated `npm ls` - list globally or locally installed node modules.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i npmls --save
```


## Usage
> For more use-cases see the [tests](./test.js)

### [npmls](./index.js#L54)
> List installed node modules, globally or locally.

- `[globally]` **{Boolean}** list global modules, default `false`    
- `[callback]` **{Function}** node-style callback    
- `returns` **{Array}** list of modules if nod callback given  

**Example**

```js
var npmls = require('npmls')

console.log(npmls(true))
//=> [ 'add-package-owners',
//  'apidocs-cli',
//  'bower',
//  'browserify',
//  ...
// ]

// or asynchronously
npmls(true, function (err, modules) {
  if (err) return console.error(err)

  console.log(modules)
  //=> [ 'add-package-owners',
  //  'apidocs-cli',
  //  'bower',
  //  'browserify',
  //  ...
  // ]
})
```


## CLI
> Just run `npm install -g npmls` to install it globally and try it.

```
$ npmls -h
Usage: npmls [options]

Example
  $ npmls --global
  add-package-owners
  apidocs-cli
  bower
  browserify
  ...
  mocha
  npm
  npm-related
  opn-cli
  ...

Options
  -v, --version    Shows module version
  -g, --global     Lists globally installed modules
  -h, --help       Shows this help

Readme: https://github.com/tunnckoCore/npmls
```


## Related
- [apidocs-cli](https://github.com/tunnckocore/apidocs-cli): Command-line app for generating API docs from code comments. Can… [more](https://github.com/tunnckocore/apidocs-cli)
- [detect-installed](https://github.com/tunnckocore/detect-installed): Checks that given package name is installed locally or globally.… [more](https://github.com/tunnckocore/detect-installed)
- [get-installed-path](https://github.com/tunnckoCore/get-installed-path): Get the installation path of the given package if it… [more](https://github.com/tunnckoCore/get-installed-path)
- [gitclone-cli](https://github.com/tunnckocore/gitclone-cli): Git clone github repository with pattern like `user/repo#branch`
- [global-modules](https://github.com/jonschlinkert/global-modules): The directory used by npm for globally installed npm modules.
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system -… [more](https://github.com/tunnckoCore/is-installed)
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry… [more](https://github.com/tunnckocore/is-missing)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/npmls/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/npmls
[npmjs-img]: https://img.shields.io/npm/v/npmls.svg?label=npmls

[license-url]: https://github.com/tunnckoCore/npmls/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/npmls
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/npmls.svg

[travis-url]: https://travis-ci.org/tunnckoCore/npmls
[travis-img]: https://img.shields.io/travis/tunnckoCore/npmls.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/npmls
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/npmls.svg

[david-url]: https://david-dm.org/tunnckoCore/npmls
[david-img]: https://img.shields.io/david/tunnckoCore/npmls.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg