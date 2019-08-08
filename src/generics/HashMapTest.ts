import {HashMap} from "./HashMap";

// 定义了一个key是string,value是string的map
let map: HashMap<string,string> = new HashMap();
// 新增一个key = a ,value = ccc
map.put('a','ccc');
// 打印新增一个key = a  [ Node { key: 'a', value: 'ccc' } ]
console.log('新增一个key = a ', map.queryAll());

// 新增一个value不是string的试试
// Error:(11, 13) TS2345: Argument of type '1' is not assignable to parameter of type 'string'.
// 果然，value不是string的，直接提示错误了。
// map.put('a',1);
// 新增一个key不是string的试试
// Error:(15, 9) TS2345: Argument of type '1' is not assignable to parameter of type 'string'.
// 果然，key，直接提示错误了。
// map.put(1,'ss');

// 新增一个key = a ,value = bbbb
map.put('a','bbbb');
// 打印 新增一个key = a ,value = bbbb, 看看是不是覆盖掉了:  [ Node { key: 'a', value: 'bbbb' } ]
console.log('新增一个key = a ,value = bbbb, 看看是不是覆盖掉了: ', map.queryAll());

// 新增一个key = b ,value =bbbccb
map.put('b','bbbccb');
/*
* 打印:  新增一个key = b ,value =bbbccb:  [ Node { key: 'a', value: 'bbbb' },
        Node { key: 'b', value: 'bbbccb' } ]
* */
console.log('新增一个key = b ,value =bbbccb: ', map.queryAll());

// 是否包含key
// 是否包含key=a: true
console.log('是否包含key=a:', map.containKey('a'));
//  是否包含key=c: false
console.log('是否包含key=c:', map.containKey('c'));

// 移除key = a
map.remove('a');
// 移除一个存在的key = a之后: [ Node { key: 'b', value: 'bbbccb' } ]
console.log('移除一个存在的key = a之后:',map.queryAll());

// 尝试移除一个不存在的key
map.remove('c');
//  尝试移除一个不存在的key=c之后: [ Node { key: 'b', value: 'bbbccb' } ]
console.log('尝试移除一个不存在的key=c之后:',map.queryAll());








