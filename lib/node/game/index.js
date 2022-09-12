const game = require('./lib.js')
let count = 0, lastResult
process.stdin.on('data', e => {
    let playerAction = e.toString().trim()
    const result = game(playerAction)
    console.log('.........r', result)
    if (result === 1) {
        if (lastResult === 1 || lastResult === undefined) {
            count++
        } else {
            count = 1
        }
    } else {
        count = 0
    }
    console.log('.....count', count)
    if (count >= 3) {
        console.log(`你连赢${count}次，老子不玩了`)
        process.exit()
    }
    lastResult = result
})