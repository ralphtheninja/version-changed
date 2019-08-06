const exec = require('child_process').exec

const getPackageVersion = (rev, cb) => {
  exec(`git show ${rev}:./package.json`, {
    encoding: 'utf8'
  }, (err, diff) => {
    cb(err, diff && JSON.parse(diff).version)
  })
}

module.exports = cb => {
  getPackageVersion('HEAD', (err, head) => {
    if (err) return cb(err)
    getPackageVersion('HEAD~1', (err, prev) => {
      cb(err, head && prev && head !== prev)
    })
  })
}
