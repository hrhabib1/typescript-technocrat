"use strict";
//  Reference Type --> object
// implisive
const user1 = {
    firstName: 'Habibur',
    middleName: 'Rahman',
    lastName: 'HR'
};
// explesive 
const user2 = {
    firstName: 'Habibur',
    middleName: 'Rahman',
    lastName: 'HR'
};
// otional type
const user3 = {
    firstName: 'Habibur',
    lastName: 'Rahman',
};
const user4 = {
    company: 'HR Group',
    firstName: 'Habibur',
    lastName: 'Rahman',
};
//exxess property use
const user5 = {
    company: 'HR Group',
    firstName: 'Habibur',
    lastName: 'Rahman',
};
user5.firstName = 'HR';
