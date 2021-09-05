console.log('start require')

const lib = require('./lib.js')
console.log('==== require =====', lib)

// add new member out lib
lib.addnational = 'addnational'

console.log('end require')
