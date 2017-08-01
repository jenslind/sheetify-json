const sheetify = require('sheetify')
const fs = require('fs')

module.exports = sheetifyJson

function sheetifyJson (filename, src, opts, done) {
  if (/\.js$/i.test(filename)) return done(null, src)

  var prefix = sheetify.getPrefix(src)
  var jsonFilename = filename + '.json'

  fs.writeFile(jsonFilename, `{"prefix": "${prefix}"}`, function () {})
  done(null, src)
}
