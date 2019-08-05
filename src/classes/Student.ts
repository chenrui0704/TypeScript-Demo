import People from "./People";

export default class Student extends People{
    
    // 年级, 默认1
    private _grade: number = 1;
    
    // ts中的get方法。
    get grade(): number {
        return this._grade;
    }
    
    set grade(value: number) {
        this._grade = value;
    }
    
    toString(): string {
        return super.toString() + `, grade:${this.grade}`;
    }
    
    printInfo(): void {
        super.printInfo();
        console.log(`grade:${this.grade}`);
    }
    
}

/*
let student: Student = new Student();
// 打印: name:小明 , age:18 , sex:true , hobby:吃,玩, grade:1
console.log(student.toString());
student.grade = 2;
student.setName('小刚');
student.setAge(22);
// 打印: name:小刚, age:22, sex:true, hobby:吃,玩
// grade:2
student.printInfo();
*/
