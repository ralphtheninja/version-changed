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

```json
{
  "scripts": {
    "prebuild": "version-changed && prebuildify --napi --strip"
  }
}
```

## API

### `versionChanged(err, cb)`

Calls back with `(err, changed)` where `changed` is `true` if the version in `package.json` at the current commit has changed compared to the previous commit, otherwise `false`.

## Kudos

This code was extracted from [`prebuild-ci`](https://github.com/prebuild/prebuild-ci). Kudos to [`@juliangruber`](https://github.com/juliangruber). :heart:

## License

MIT
