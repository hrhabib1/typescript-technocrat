{
    // Type Alias

    type User1 = {
        name: string;
        age: number;
    }

    type RollNumber = number;
    type UserWithRole1 = User1 & {role: string};

    const user1: UserWithRole1 = {
        name: 'Habib',
        age: 25,
        role: 'developer',
    };

    // type interface
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    };

    const user2: UserWithRole2 = {
        name: 'Habib',
        age: 25,
        role: 'developer',
    };

    //  js--> object, array--> object, fuction--> object

    // for arry
    type Roll1 = number[];

    interface Roll2{
        [index: number]: number;
    }

    const rollNumber1: Roll1 = [1, 2, 3];

    const rollNumber2: Roll2 = [1, 2, 3];

    // for function

    type Add1 = (num1: number, num2: number)=> number;

    const add1: Add1 = (num1, num2)=> num1 + num2;

    interface Add2 {
        (num1: number, num2: number) : number;
    };

    const add2: Add2 = (num1, num2)=> num1 + num2;

    // 
}