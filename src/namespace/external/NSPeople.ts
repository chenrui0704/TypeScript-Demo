/// <reference path="NSMySchool.ts" />
namespace NSMySchool {
    export class NSPeople {
        // 姓名, 默认小明
        private name: string = '小明';
        // 年龄, 默认18
        private age: number = 18;
        // 性别, true = 男， false = 女
        private sex: boolean = true;
        // 爱好, 默认 吃，玩
        private hobby: Array<string> = ['吃', '玩'];
        
        // 类型方法声明，方法的返回值强制固定。
        getName(): string {
            return this.name;
        }
        
        getAge(): number {
            return this.age;
        }
        
        getSex(): boolean {
            return this.sex;
        }
        
        getHobby(): Array<string> {
            return this.hobby;
        }
        
        setSex(value: boolean) {
            this.sex = value;
        }
        
        setName(value: string) {
            this.name = value;
        }
        
        setAge(value: number) {
            this.age = value;
        }
        
        setHobby(value: Array<string>) {
            this.hobby = value;
        }
        
        toString(): string {
            let printString = `name:${this.name} , age:${this.age} , sex:${this.sex} , hobby:${this.hobby}`;
            return printString;
        }
        
        printInfo(): void {
            console.log(`name:${this.name}, age:${this.age}, sex:${this.sex}, hobby:${this.hobby}`);
        }
    }
}
