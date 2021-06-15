// 原始类型
let bool: boolean = true
let str: string = 'ts'
let num: number = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组 一种个数和类型 固定且对应 的数组
let tuple: [number, string] = [1, '2']

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 0

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 函数怎么声明 ？
function add1(x: number, y: number) {
    return x + y
}
// console.log(add1(2,4))

// symbol
let s1:symbol = Symbol()
let s2 = Symbol()

// undefined, null
let un: undefined = undefined
let nu: null = null
// console.log(un === void 0)
num = un
num = null

// void 
let noReturn = () => {}

// any ts 通过它兼容 es
let any

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}