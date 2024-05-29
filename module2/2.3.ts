{
    // generic type

    // for array
    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [1, 2, 3];
    // const rollNumbers: Array<number>= [1, 2, 3];
    const rollNumbers: GenericArray<number>= [1, 2, 3];

    // const mentors: string[] = ['x', 'y', 'z'];
    // const mentors: Array<string> = ['x', 'y', 'z'];
    const mentors: GenericArray<string> = ['x', 'y', 'z'];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    // for array of object

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'habib',
            age: 25,
        },
        {
            name: 'rapti',
            age: 23,
        }
    ];

    // generic tuple

    type GenericTuple<x, y> = [x, y];

    const manush: GenericTuple<string, string> = ['Habib', 'Rapti'];

    type User1 = {
        name: string, 
        email: string
    }
    interface User2 {
        name: string, 
        email: string
    }

    const userWithId1: GenericTuple<number, { name: string, email: string}> = [1234, {
        name: 'Habib',
        email: 'md.habibur31rahman@gmail.com'
    }];
    const userWithId2: GenericTuple<number, User1> = [1234, {
        name: 'Habib',
        email: 'md.habibur31rahman@gmail.com'
    }];
    const userWithId: GenericTuple<number, User2> = [1234, {
        name: 'Habib',
        email: 'md.habibur31rahman@gmail.com'
    }];




    // 
}