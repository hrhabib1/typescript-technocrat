{
    // Abstrauction

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    };

    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car`);
        };
        stopEngine(): void {
            console.log(`I am stoping the car`);
        };
        move(): void {
            console.log(`I am moving the car`);
        };
        test(): void {
            console.log(`I am testing the car`);
        };
    };

    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    toyotaCar.stopEngine();
    toyotaCar.test();

    // abstruct
    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(): void {
            console.log(`I am testing the car`);
        };
    };

    // real implementation
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car`);
        };
        stopEngine(): void {
            console.log(`I am stoping the car`);
        };
        move(): void {
            console.log(`I am moving the car`);
        };
    };

    // const Car3 = new Car2()

    const toyotaCar2 = new ToyotaCar();

    toyotaCar2.startEngine();
    toyotaCar2.stopEngine();
    toyotaCar2.test();




    // 
}