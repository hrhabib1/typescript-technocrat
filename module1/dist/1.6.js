"use strict";
// Function
//  1. Normal Function and 2. Arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
const addArrow = (num1, num2) => num1 + num2;
// Object --> Function --> Method
const poorUser = {
    name: 'Habib',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const poorUser1 = {
    name: 'Habib',
    balance: 0,
    addBalance(balance) {
        return `My balance is: ${this.balance + balance}`;
    }
};
// array
const arr = [1, 2, 3];
const newArr = arr.map((elem) => elem * elem);
