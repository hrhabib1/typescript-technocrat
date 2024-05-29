"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // Learn spread operator
    const bros1 = [
        'Habib',
        'shakil',
        'Saiful',
    ];
    const bros2 = [
        'Raihan',
        'Sourov',
        'Siam',
    ];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator 
    const greetFriends = (friend1, friend2, friend3) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    };
    greetFriends('Habib', 'Rapti', 'HR');
    const greetFriends2 = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends2('Habib', 'Rapti', 'HR');
}
