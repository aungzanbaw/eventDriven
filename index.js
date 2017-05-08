'use strict'
let fs = require('fs')

const readFileAsArray = function (file, cb) {
  fs.readFile(file, function (err, data) {
    if(err) return cb(err);
    const lines = data.toString().trim().split("\n")
    cb(null, lines)
  })
}

readFileAsArray('./data.txt',function(error, content) {
  console.log(content)
})
