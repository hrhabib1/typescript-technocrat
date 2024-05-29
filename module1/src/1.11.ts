{
    // ternary operator || optional chaining || nullish coalscing operator

    const age: number = 19;

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult')
    }

    //use ternary operation

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult })

    // nullish coalescing operation
    // null/undefined --> decision making

    const isAuthenticated = null;
    const isAuthenticated1 = '';

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    const result3 = isAuthenticated1 ?? 'Guest';
    const result4 = isAuthenticated1 ? isAuthenticated1 : 'Guest';

    console.log({ result1 }, 'and', { result2 })
    console.log('Second', { result3 }, 'and', { result4 })

    //  optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            reoad: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    };

    const user: User={
        name: 'Habib',
        address:{
            city: 'nk',
            reoad: 'hospital road',
            presentAddress: 'housing',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address';
    console.log({permanentAddress})


    // 
}