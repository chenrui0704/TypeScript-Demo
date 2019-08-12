/// <reference path="NSPeople.ts" />
/// <reference path="NSStudent.ts" />
/// <reference path="NSSchool.ts" />

let school = new NSMySchool.NSSchool();
let student = new NSMySchool.NSStudent();


// 文件引用写法:  NSSchool { name: '希望小学', studentList: [] }
console.log('文件引用写法: ', school);
// 文件引用写法:  NSStudent { name: '小明', age: 18, sex: true, hobby: [ '吃', '玩' ], _grade: 1 }
console.log('文件引用写法: ',student);
school.studentList.push(student);
school.name = '杨浦区实验小学';

/**
 文件引用写法:  NSSchool {
  name: '杨浦区实验小学',
  studentList:
   [ NSStudent { name: '小明', age: 18, sex: true, hobby: [Array], _grade: 1 } ] }
 * */
console.log('文件引用写法: ',school);
