{
    // polymorphism

    class Person{
        getSleep(){
            console.log(`I am sleeping for 8 hours per day`);
        }
    };
    class Student extends Person{
        getSleep(){
            console.log(`I am sleeping for 7 hours per day`);
        }
    };
    class Developer{
        getSleep(){
            console.log(`I am sleeping for 6 hours per day`);
        }
    };

    const getSleepingHours = (param: Person) =>{
        param.getSleep();
    };

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);


    class Shape {
        getArea(): number{
            return 0;
        }
    };

    class Circle extends Shape {
        radious: number;

        constructor(radious: number){
            super();
            this.radious = radious;
        };

        getArea(): number{
            return Math.PI * this.radious * this.radious;
        }
    };
    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number){
            super();
            this.height = height;
            this.width = width;
        };

        getArea(): number{
            return  this.height * this.width;
        }
    };

    const getShapeArea = (param: Shape)=>{
        console.log(param.getArea());
    };

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(60, 40);
    
    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);



    // 
}