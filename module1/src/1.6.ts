// Function
//  1. Normal Function and 2. Arrow function

function add (num1: number, num2: number): number{
    return num1 + num2
}
add(2,4)

const addArrow = (num1: number, num2: number): number => num1 + num2

// Object --> Function --> Method

const poorUser = {
    name: 'Habib',
    balance: 0,
    addBalance(balance: number): number{
        return this.balance + balance
    }
}

const poorUser1 = {
    name: 'Habib',
    balance: 0,
    addBalance(balance: number): string{
        return `My balance is: ${this.balance + balance}`
    }
}

// array

const arr: number[] = [1,2,3];

const newArr: number[] = arr.map((elem: number): number=> elem*elem);