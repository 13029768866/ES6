// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

 // 枚举的es5样子
/*
 var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Repoter"
})（Role || Role = {}）*/

// 字符串枚举
enum Message {
    Success = "成功",
    Fail = "失败"
}

//  枚举成员
/*
* 1、枚举成员是只读类型
* 2、computed后的成员需要设置默认值
* */
enum Char {
//  const常量枚举
    a,
    b =Char.a,
    c = 1 + 3,
//   computed 需要计算
   d = Math.random(),
   e = "123".length
}

//常量枚举
const enum Month{
    Jan,
    Feb,
    Mar
}
// let month = [Month.Jan,Month.Feb,Month.Mar]

//  枚举类型
enum E {a,b}    // 无初始值
enum F {a = 0,b = 1}     // 都是数字
enum G {a= "apple",b="banana"}  // 都是字符串

let e: E = 3
let f: F = 3
// e === f  不同类型枚举无法比较

let e1: E.a
let e2: E.b
let e3: E.a
// e1 === e2 无法比较
// @ts-ignore
e1 === e3 // 可以比较

// 字符串枚举取值只能是枚举成员类型
let g1: G = G.b
let g2: G.a = G.a