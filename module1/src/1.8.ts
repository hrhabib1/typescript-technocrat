{

    // Destructuring

    // object destructuring
    const user ={
        id: 31,
        name: {
            firstName: 'Habibur',
            middleName: 'Rahman',
            lastName: 'HR',
        },
        contact: '01500000000',
        address: 'Noakhali',
    };

    const {
        contact, name: {middleName: midNam} 
    } = user; //name alias

    // array destructuring

    const myFriends = ['shakil', 'jony', 'mridul', 'saiful', 'shahin'];

    const [, bestFriend,, ...rest] = myFriends;

}