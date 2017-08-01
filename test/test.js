var browserify = require('browserify')
var test = require('tape')
var fs = require('fs')
var sheetify = require('sheetify')

test('sheetify-json', function (t) {
  t.plan(2)

  browserify('./test/index.js')
    .transform('sheetify/transform', {
      use: ['./index.js']
    })
    .bundle(function () {
      t.ok(fs.existsSync('./test/test.css.json'), 'Check if .json exists')

      var file = require('./test.css.json')
      var css = fs.readFileSync('./test/test.css').toString()
      t.equal(file.prefix, sheetify.getPrefix(css), 'Match prefixes')
    })
})

test.onFinish(function () {
  // Cleanup
  fs.unlinkSync('./test/test.css.json')
})
