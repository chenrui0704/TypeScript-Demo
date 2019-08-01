// Declare Variable
// TypeScript中类型一共有: boolean 布尔,string 字符串,number 数值 ,array or [] 数组, tuple 元组,enum 枚举, any 任何类型,void ,null , undefined

// 1. boolean类型. 值分为true和false。
let flag: boolean = true;
console.log('flag:', flag);

// 2. string 类型
let name: string = 'cr';
console.log('name:', name);

// 3. number类型，可包含小数
let age: number = 22;
console.log('age:', age);

//  4.string的额外用法:    ` 是键盘上ESC下面的反引号 而不是单引号。
// ${声明过的变量名}
let userInfo: string = `age:${age} , name: ${name}`;
console.log('userInfo: ', userInfo);

//  5. 数组类型  [] 或者 Array. 需要使用泛型约束
let numberList: number[] = [1,2,3];
let numberArray: Array<number> = [1,2,3];
console.log('numberList:', numberList);
console.log('numberArray:', numberArray);

// 6. 元组(不是泛型的不可变长度的数组), 已知数量和类型的数组，各元素类型可以不同。
let tupleList: [number,string] = [age,name];
console.log('tupleList:', tupleList);

// 7. 枚举(有点像map)，如果枚举Key的值是number的话，将会从0开始自增。 如果第一个是1的话，其余会自增。
// key = value
enum Color {
    red = 1,
    green = 2,
    blue = 5
}
// 根据key找value, 使用枚举名称.Key名称可以找到对应的value
let colorValue = Color.red;
console.log('colorValue:', colorValue);
// 根据value找key, 使用枚举名称[对应的值]可以找到对应的key
let colorKey: string = Color[5];
console.log('colorKey: ', colorKey);

// 8. any , 任何类型。 如果有些变量不想使用ts的强制类型约束就可以使用any进行声明
let notSureType: any = 'notSureType';
console.log('notSureType:', notSureType);
notSureType = true;
console.log('notSureType:', notSureType);
notSureType = [1,2,5];
console.log('notSureType:', notSureType);
/**
 * print info
 * notSureType: notSureType
 * notSureType: true
 * notSureType: [ 1, 2, 5 ]
 * */

// 9. void , null , undefined
/**
 *  void类型的变量声明下来只能赋值null或undefined，所以不会使用void类型
 *  null和undefined是所有类型的子类型，其余类型在声明赋值时可以直接使用null或undefined使用，
 *  当然我不建议这样做。
 * */

// 将文件声明为模块,如果不这样的话，内部的变量将可能和其他的文件(含括ts本身的文件)重名
export {};
