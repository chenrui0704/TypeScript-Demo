/// <reference path="NSMySchool.ts" />
namespace NSMySchool {
    export class NSStudent extends NSPeople {
        
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
}
