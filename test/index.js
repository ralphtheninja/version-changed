const test = require('tape')
const path = require('path')
const exec = require('child_process').exec

test('reative-path', t => {
  const changed = exec(path.resolve(__dirname, '..', 'version-changed.js'), { cwd: __dirname }, () => {
    const unchanged = exec(path.resolve(__dirname, '..', 'version-unchanged.js'), { cwd: __dirname }, () => {
      if (changed.exitCode === 1) {
        t.is(unchanged.exitCode, 0)
      } else if (changed.exitCode === 0) {
        t.is(unchanged.exitCode, 1)
      } else {
        t.fail('should not happen')
      }
      t.end()
    })
  })
})
