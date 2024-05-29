"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalscing operator
    const age = 19;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    //use ternary operation
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });
    // nullish coalescing operation
    // null/undefined --> decision making
    const isAuthenticated = null;
    const isAuthenticated1 = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    const result3 = isAuthenticated1 !== null && isAuthenticated1 !== void 0 ? isAuthenticated1 : 'Guest';
    const result4 = isAuthenticated1 ? isAuthenticated1 : 'Guest';
    console.log({ result1 }, 'and', { result2 });
    console.log('Second', { result3 }, 'and', { result4 });
    const user = {
        name: 'Habib',
        address: {
            city: 'nk',
            reoad: 'hospital road',
            presentAddress: 'housing',
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent Address';
    console.log({ permanentAddress });
    // 
}
