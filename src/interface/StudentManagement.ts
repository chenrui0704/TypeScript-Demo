import Student from "../classes/Student";

// 学生管理的一个接口，接口包含一个可选的学生对象，只读必须的学生大小
interface StudentManagement {
    student?: Student;
    readonly studentSize: number;
}

let s: StudentManagement = {student:new Student(),studentSize:5};
console.log(s.student);
console.log(s.studentSize);
// s.studentSize = 6;


//  一个创建学生的控制
function createStudent(studentManagement: StudentManagement): Student {
    // 如果没有传来学生的话，我们将创建一个默认的学生。
    let student = studentManagement.student;
    if(null == student){
        return new Student();
    }
    // 如果传来了一个学生的话，我们就返回这个学生
    return  studentManagement.student;
}

let student:Student = createStudent({studentSize:1});
console.log(student.toString());

let student2:Student = createStudent({student: new Student(),studentSize:1});
console.log(student2.toString());

let student3: StudentManagement = {student: new Student(),studentSize:1};
console.log(student3.student);

// Error:(30, 10) TS2540: Cannot assign to 'studentSize' because it is a read-only property.  这是一个只读的属性
// student3.studentSize = 2;
console.log(student3.studentSize);
