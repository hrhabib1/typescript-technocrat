{
// spread operator
// rest operator
// destructuring

// Learn spread operator

const bros1: string[] = [
    'Habib',
    'shakil',
    'Saiful',
];
const bros2: string[] = [
    'Raihan',
    'Sourov',
    'Siam',
];

bros1.push(... bros2)

const mentors1 ={
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}
const mentors2 ={
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid'
}

const mentorsList = {
    ... mentors1,
    ... mentors2
}

// learn rest operator 

const greetFriends = (friend1: string, friend2: string, friend3: string)=>{
    console.log(`Hi ${friend1} ${friend2} ${friend3}`)
};

greetFriends('Habib', 'Rapti', 'HR')

const greetFriends2 = (... friends: string[])=>{
    friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
};

greetFriends2('Habib', 'Rapti', 'HR')

}