{
    // function with generic

    const createArray = (param: string) : string[] =>{
        return [param];
    };

    const createArrayWithGeneric = <T>(param: T): T[] =>{
        return [param];
    };

    const res1 = createArray('Bangladesh');
    const resGeneric= createArrayWithGeneric<string>('Bangladesh');

    // type User = {
    //     id: number; 
    //     name: string
    // }
    interface User {
        id: number; 
        name: string
    }
    // const resGenericObj = createArrayWithGeneric<{
    //     id: number; 
    //     name: string
    // }>({
    //     id: 31,
    //     name: 'Habib'
    // })
    const resGenericObj = createArrayWithGeneric<User>({
        id: 31,
        name: 'Habib'
    })

    // tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] =>{
        return [param1, param2];
    };

    const res11 = createArrayWithTuple<string, number>('Bangladesh', 1971);
    const resTuple= createArrayWithTuple<string, {name: string}>('Bangladesh', {name: 'Asia'});


    // example

    const addCourseToStudent = <T> (student: T)=>{
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    };

    const student1 = addCourseToStudent({name: 'Habib', email: 'habib@gmail.com', devType: 'NLWD'});
    const student2 = addCourseToStudent({name: 'Rapti', email: 'rapti@gmail.com', batch: 'batch 2'});



    // 
}