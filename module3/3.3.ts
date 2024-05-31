{
    // Type guard

    // using typeof

    type Alphaneumeric = string | number;

    const add = (param1: Alphaneumeric, param2: Alphaneumeric)=>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    };

    const result1 = add(29, 31);
    const result2 = add('29', '31');

    console.log('Result1 is', result1);
    console.log('Result2 is', result2);

    // in guard
    type NormalUser = {
        name: string
    };
    type AdminUser = {
        name: string;
        role: string;
    };

    const getUser = (user: NormalUser | AdminUser) =>{
        if('role' in user){
            console.log(`This is ${user.name} and his role is ${user.role}`);
        } else{
            console.log(`This is ${user.name}`)
        }
    };

    const normalUser: NormalUser ={
        name: 'Habib'
    };
    const adminUser: AdminUser ={
        name: 'Habib',
        role: 'Admin'
    };

    getUser(normalUser);
    getUser(adminUser);
    

    // 
}