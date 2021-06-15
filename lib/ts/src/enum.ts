/**
 * 设计目的：思维方法： 代码中不容易记忆的硬编码、未来可能改变的常量，用枚举类型抽取出来定义，可以改善代码可读性和可维护性
 */

// 数字枚举
enum Role {
    Admin = 1,
    Manager,
    Dev,
    test,
    User
}

// console.log(Role.Admin)
// console.log(Role)

// 字符串枚举
enum State {
    Loading = "加载中...",
    NoMore = "没有更多"
}

// 常量枚举, 只需要值不需要键的时使用，运行时代码简洁
const enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
let weeks = [Week.Sun, Week.Mon, Week.Tue]

// 枚举成员, 只读类型，不能修改
// Role.Admin = 2 
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 2,
    // c1 = '1',

    // computed
    d = Math.random(),
    e = '123'.length,
    f = 1
}

// 枚举类型, 下面三种情况下，枚举和枚举成员可以作为单独的类型存在
enum X { a, b }
enum Y { a = 1, b = 2 }
enum Z { a = "cat", b = "dog"} 

let x: X = 1
// let x: X = {a:2, b:3}
let y: Y = 1
// console.log('x:', x)
// x === y 

let x1: X.a = 1
let x2: X.b = 1
// x1 === x2 
let x3: X.a = 1
x1 === x3

let z1: Z = Z.a
let z2: Z.a = Z.a

// 异构枚举, 容易混淆，不常用
enum YesOrNo {
    N,
    Y = 'yes'
}

