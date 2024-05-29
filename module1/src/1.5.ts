//  Reference Type --> object

// implisive
const user1 = {
    firstName: 'Habibur',
    middleName: 'Rahman',
    lastName: 'HR'

};

// explesive 
const user2 : {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Habibur',
    middleName: 'Rahman',
    lastName: 'HR'

};

// otional type
const user3 : {
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
} = {
    firstName: 'Habibur',
    lastName: 'Rahman',

};

const user4 : {
    company: 'HR Group'; //type --> literal type (Value fixed)  
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
} = {
    company: 'HR Group',
    firstName: 'Habibur',
    lastName: 'Rahman',

};

//exxess property use
const user5 : {
    readonly company: string; //type --> literal type (Value fixed)  
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
} = {
    company: 'HR Group',
    firstName: 'Habibur',
    lastName: 'Rahman',

}

user5.firstName='HR'