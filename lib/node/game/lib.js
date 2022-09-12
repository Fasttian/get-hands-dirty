module.exports = function (playerAction) {
    const game = {
        rock: '石头',
        scissor: '剪刀',
        paper: '布',
    }

    let aiAcition

    const random = Math.random() * 3

    if (random < 1) {
        aiAcition = 'rock'
    } else if (random > 2) {
        aiAcition = 'scissor'
    } else {
        aiAcition = 'paper'
    }
    console.log('你：', game[playerAction])
    console.log('电脑：', game[aiAcition])
    if (playerAction === aiAcition) {
        console.log('平局')
        return 0
    } else if (playerAction === 'rock' && aiAcition === 'scissor' ||
        playerAction === 'scissor' && aiAcition === 'paper' ||
        playerAction === 'paper' && aiAcition === 'rock') {
        console.log('你赢了')
        return 1
    } else {
        console.log('你输了')
        return -1
    }
}
