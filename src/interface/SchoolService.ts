import Student from "../classes/Student";

import StudentServiceImpl from "./StudentService";

interface SchoolService {
    queryAllStudent(): Array<Student>;
}

class SchoolServiceImpl implements SchoolService{
    
    private studentService = StudentServiceImpl.createService();
    
    queryAllStudent(){
        let data: Array<Student> = this.studentService.queryAll();
        
        
        return data;
    }
    
}

let schoolService: SchoolService = new SchoolServiceImpl();
console.log(schoolService.queryAllStudent());


