#!/usr/bin/env node

require('.')((err, changed) => {
  if (err) throw err
  process.exit(changed ? 0 : 1)
})
