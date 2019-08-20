// ECMAScript European Computer Manufacturers Association Script
let oldArray = [1, 2, 3, 4, 5];
let newArray = [3, 4, 5, 6, 7];
let repeatArray = [];
// ES6特性写法
oldArray.forEach( x => { newArray.includes(x) ? repeatArray.push(x) : null; });
// 3,4,5
console.log(repeatArray.toString());

// 基本写法
repeatArray = [];
let index = 0;
for (let i = 0; i < oldArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
        if(oldArray[i] == newArray[j]){
            repeatArray[index] = oldArray[i];
            index++;
        }
    }
}
// 3,4,5
console.log(repeatArray.toString());
