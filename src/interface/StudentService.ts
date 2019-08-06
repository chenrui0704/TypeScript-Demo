import Student from "../classes/Student";

interface StudentService {
    queryAll(): Array<Student>;
}

// 服务
class StudentServiceImpl implements StudentService {
    
    private static studentService: StudentService;
    
    private constructor() {};
    
     static  createService(): StudentService {
         if  (null == this.studentService) {
            this.studentService = new StudentServiceImpl();
        }
        return this.studentService;
    }
    
   
    queryAll() {
        let data: Array<Student> = [new Student(), new Student(), new Student()];
        return data;
    }
    
}

export default StudentServiceImpl;

