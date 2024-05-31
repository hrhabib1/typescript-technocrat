{
    // oop - inheritence

    class Person{

        constructor(public name: string, public age: number, public address: string){

        }
        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours} hour`)
        }
    };

    class Student1 extends Person{
        
         constructor(name: string, age: number, address: string){
            super(name, age, address)
         }
         }
    class Teacher1 extends Person{

         constructor(name: string, age: number, address: string, public designation: string){
            super(name, age, address)
         }

         takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass} class`)
         }
         }

         const student1 = new Student1('Habib', 25, 'nk');

         const teacher1 = new Teacher1('Rahman sir', 35, 'nk', 'Teacher');

         student1.getSleep(6);
         teacher1.getSleep(7);
         teacher1.takeClass(4);






    // 
}