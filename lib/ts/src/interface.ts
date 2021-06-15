/**
 * 设计目的：interface 是一种编程协作的契约，可以用来约束对象、函数和类的结构和类型
 */

// 对象类型的接口
interface List {
    id: number,
    name: string,
    [x: string]: any
}
interface Res {
    data: List[]
}
function render(res: Res) {
    res.data.forEach((val) => {
        console.log(val.id + ':' + val.name)
    })
}
let res = {
    data: [
        {id:1, name: '张三', sex: 'male'},
        {id:2, name: '李四'}
    ]
}
// render(res)
// 类型断言, 绕过类型检查
render({
    data: [
        {id:1, name: '张三', sex: 'male'},
        {id:2, name: '李四'}
    ]
} as Res)