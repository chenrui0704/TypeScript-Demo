import Student from "./Student";

export default class School {
    // 学校名称，默认希望小学
    name: string = '希望小学';
    // 学校里的学生，默认空
    studentList: Array<Student> = [];
    
    // any方法声明，没有限制方法的返回值。
    printInfo(){
        console.log(`name:${this.name}, studentList:${this.studentList.toString()}`);
    }
    
}

/*
let school: School = new School();
//name:希望小学, studentList:
school.printInfo();

school.name = '上海市复旦大学附属实验小学';

let student1: Student = new Student();
student1.grade = 3;
student1.setName('LSH');
student1.setAge(8);

let student2: Student = new Student();
student2.grade = 4;
student2.setName('LX');
student2.setAge(9);

school.studentList.push(student1,student2);

//name:上海市复旦大学附属实验小学, studentList:name:LSH , age:8 , sex:true , hobby:吃,玩, grade:3,name:LX , age:9 , sex:true , hobby:吃,玩, grade:4
school.printInfo();
*/
