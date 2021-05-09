// // in promise, resolve always is asnyc
// var r = new Promise(function(resolve,  reject) {
//     console.log('a')
//     resolve()
// }).then(() => console.log('c'))
// console.log('b')

// ro follow, what is the diff ?
// var r = new Promise(function(resolve,  reject) {
//     console.log('a');
//     resolve()
// });
// r.then(() => console.log('c'));
// console.log('b')

// // mixin setTimeout with promise
// var r = new Promise(function(resolve,  reject) {
//     console.log('a');
//     resolve()
// });
// setTimeout(() => console.log('d'), 0);
// r.then(() => console.log('c'));
// console.log('b')

// 1s promise
setTimeout(() => console.log('d'), 0);
var r = new Promise(function(resolve,  reject) {
    resolve()
});
r.then(() => {
    var beginTime = Date.now();
    while(Date.now() - beginTime < 100);
    console.log('c1');
    new Promise(function(resolve, reject) {
        resolve();
    }).then(() => console.log('c2'))
});
