{
    // Type Alias
    type Student ={
        name: string,
        age: number,
        contactNo?: string,
        address: string,
        gender: string,
    }
 
    const student1: Student ={
        name: 'Habib',
        age: 25,
        contactNo: '015.....',
        address: 'nk',
        gender: 'male',
    }
    const student2: Student ={
        name: 'Habib',
        age: 25,
        contactNo: '015.....',
        address: 'nk',
        gender: 'male',
    };
    const student3: Student ={
        name: 'Habib',
        age: 25,
        contactNo: '015.....',
        address: 'nk',
        gender: 'male',
    };

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'Habib';
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;



    // 
}