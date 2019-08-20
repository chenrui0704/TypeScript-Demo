//  Scope

if(true){
    //这是全局变量
    var a = 5;
}

// if里声明的全局a 5
console.log('if里声明的全局a', a);

(function asd(){
    //这是局部变量
    var a = 6;
    //这是全局变量
    b = 6;
    // function里声明的局部a 6
    console.log('function里声明的局部a', a);
    var c = 1;
    // function里声明的局部c 1
    console.log('function里声明的局部c', c);
})();
// ReferenceError: c is not defined
// console.log('function里声明的局部c',c);

// function里声明的全局b 6
console.log('function里声明的全局b', b);
b = 1;
// a用了if里的 5
console.log('a用了if里的', a);
// b更改了值 1
console.log('b更改了值',b);
