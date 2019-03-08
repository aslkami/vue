let fs = require('fs')
let url = require('url')
module.exports =  function readFile( filename, callback) {
  fs.readFile(filename, 'utf8', function(err, data){
    if( err || !data.length) {
      console.log(err)
      callback([])
    }else {
      callback(JSON.parse(data))
    }
  })
}