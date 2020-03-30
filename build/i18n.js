const fs = require('fs')
fs.mkdirSync('./lib/locales')
fs.copyFileSync('./src/locales/cn.js', './lib/locales/cn.js')
fs.copyFileSync('./src/locales/en.js', './lib/locales/en.js')
