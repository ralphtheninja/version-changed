# version-changed

> Checks if the version in `package.json` has changed since the last commit.

![Node version](https://img.shields.io/node/v/version-changed.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/version-changed.svg?branch=master)](https://travis-ci.org/ralphtheninja/version-changed)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm i version-changed -S|-D|-g
```

## Usage

In code:

```js
const versionChanged = require('version-changed')
versionChanged((err, changed) => {
  if (err) throw err
  console.log('version changed', changed)
})
```

On command line:

```sh
$ version-changed && ./dosomething
```

When used in `package.json` it's more handy to shortcut with `||`. For this reason you can use `version-unchanged`.

The `prebuild` script below will run `prebuildify` if the version has changed, but will not fail if the version didn't change.


```json
{
  "scripts": {
    "prebuild": "version-unchanged || prebuildify --napi"
  }
}
```

## API

### `versionChanged(err, cb)`

Calls back with `(err, changed)` where `changed` is `true` if the version in `package.json` at the current commit has changed compared to the previous commit, otherwise `false`.

## CLI

### `version-changed`

Exits with `0` if the version has changed. Use this together with `&&`.

### `version-unchanged`

Exits with `0` if the version is _unchanged_. Use this together with `||`.

## Kudos

This code was extracted from [`prebuild-ci`](https://github.com/prebuild/prebuild-ci). Kudos to [`@juliangruber`](https://github.com/juliangruber). :heart:

## License

MIT
