/// <reference path="NSMySchool.ts" />
namespace NSMySchool {
    export class NSSchool {
        // 学校名称，默认希望小学
        name: string = '希望小学';
        // 学校里的学生，默认空
        studentList: Array<NSStudent> = [];
        
        // any方法声明，没有限制方法的返回值。
        printInfo() {
            console.log(`name:${this.name}, studentList:${this.studentList.toString()}`);
        }
        
    }
}
