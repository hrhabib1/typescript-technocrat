{
    // Generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner = 'bike' | 'car' | 'ship'; // manualy

    type Owner2 = keyof Vehicle;

    const person1: Owner = 'bike';
    const person2: Owner2 = 'car';

    const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y)=>{
        return obj[key];
    };

    const user = {
        name: 'Habib',
        age: 25,
        address: 'nk',
    };

    const car ={
        model: 'Toyota 100',
        year: 200,
    }

    const result1 = getPropertyValue(user, 'name');
    
    const result2 = getPropertyValue(car, 'model');



    // 
}