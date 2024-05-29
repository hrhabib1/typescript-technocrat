{
    // union type

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'A+' | 'B+' | 'O+' | 'AB+';

    };

    const user1: User ={
        name: 'habib',
        gender: 'male',
        bloodGroup: 'B+',

    };

    // Intersection Type

    type NewFrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
    };
    type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
    };

    type FullStackDeveloper = NewFrontendDeveloper & BackendDeveloper;

    const fullSatckDeveloper: FullStackDeveloper={
        skills: ['html', 'css', 'react'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }




    // 
}