{
    // constraints
    const addCourseToStudent = <T extends {id: number; name: string; email: string}> (student: T)=>{
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    };

    const student1 = addCourseToStudent({id: 31, name: 'Habib', email: 'habib@gmail.com', devType: 'NLWD'});
    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email:string;
        batch: string
    }>({id: 29, name: 'Rapti', email: 'rapti@gmail.com', batch: 'batch 2'});




    // 
}