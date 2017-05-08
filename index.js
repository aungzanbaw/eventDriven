'use strict'
let fs = require('fs')

const readFileAsArray = function (file, cb = () => {}) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, function (err, data) {
      if(err){
        reject(err)
        return cb(err);
      }

      const lines = data.toString().trim().split("\n")
      resolve(lines)
      cb(null, lines)
    })
  })
}

// Callback pattern still working
readFileAsArray('./data.txt',function(error, content) {
  console.log(content)
})

// Promise pattern
readFileAsArray('./data.txt')
  .then(lines => {
    console.log(lines)
  })
  .catch(console.error)
