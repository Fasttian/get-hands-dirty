console.log('I`m a lib')
exports.hello = 'hello commonjs'

exports.add = function(x, y) {
    return x + y
}

// exports is a slice of module.exports, equivalent to `exports = module.exports`
// digression, Array.prototype.slice(start, end), return a slice of array
exports.obj = {
    name: 'zhang san',
    age: 29
}

// the module.exports will cover the exports, reference changed
module.exports = function minus(x, y) {
    return x - y
}

setTimeout(() => {
    console.log('======= exports ========', exports)
    console.log('========= module.exports =========', module.exports)
}, 2000)
