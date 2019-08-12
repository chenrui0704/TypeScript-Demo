import MySchoolNameSpace from './MySchool';

let school = new MySchoolNameSpace.School();
let student = new MySchoolNameSpace.Student();

// School { name: '希望小学', studentList: [] }
console.log(school);
// Student { name: '小明', age: 18, sex: true, hobby: [ '吃', '玩' ], _grade: 1 }
console.log(student);
school.studentList.push(student);
school.name = '杨浦区实验小学';
/**
 * School {
  name: '杨浦区实验小学',
  studentList:
   [ Student { name: '小明', age: 18, sex: true, hobby: [Array], _grade: 1 } ] }
 * */
console.log(school);

