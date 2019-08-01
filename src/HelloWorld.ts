// 将文件声明为模块,如果不这样的话，内部的变量将可能和其他的文件(含括ts本身的文件)重名
export {};
let str: string = 'Hello World';
console.log('str:', str);


