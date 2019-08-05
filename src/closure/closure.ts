//可以看成一个User类
var User = (function() {
    //类的私有属性
    var age = 0;
    //类的私有方法
    function changeBy(val) {
        age += val;
    }
    //add,reduce,value  是后续调用时用到的名称，类似别名
    return {
        add: function() {
            changeBy(1);
        },
        reduce: function() {
            changeBy(-1);
        },
        getAge: function() {
            return age;
        }
    }
})();
// print : 0
console.log(User.getAge());
User.add();
// print 1
console.log(User.getAge());
User.reduce();
// print 1
console.log(User.getAge());

