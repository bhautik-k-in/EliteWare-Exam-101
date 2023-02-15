const prompt = require('prompt-sync')();
require('dotenv').config();

/**
 * @author Bhautik Kevadiya
 * @description Simple Calculator implementation
 * @param {*} val1 Any number
 * @param {*} val2 Any number
 * @param {*} operator Any operator to evaluate
 * @returns String | Values that can be calculated
 */
function calculate (val1, val2, operator) {
    // validation to check numbers and operators are proper or not
    if (!['+', '-', '*', '/'].includes(operator)) return "Operators must be +, -, * or / only. Please try again";
    if (typeof val1 != 'number' || typeof val2 != 'number') return "Required only Number values";
    if (operator === '/' && val2 === 0) return "Operation Can not be performed due to division by zero. Please try again.";

    const calculation = {
        '+': val1 + val2,
        '-' : val1 - val2,
        '*': val1 * val2,
        '/': (val1 / val2).toFixed(2)
    }
    return calculation[operator];
}

/**
 * Real Time Input from Users
 * @note TO TEST THE TEST CASES FOR THIS FEATURE, PLEASE CHANGE ENV VARIABLE TO TESTING, BY DEFAULT THE ENV VARIABLE IS SET TO DEVELOPMENT
 */
if (process.env.ENV === 'development') {
    const val1 = +prompt("Enter any number 1:::    ");
    const val2 = +prompt("Enter any number 2:::    ");
    const operator = prompt("Enter the operator :::  ");
    
    const result = calculate(val1, val2, operator);
    console.log(`Answer :::::::>>>>>   ${result}`);
}

module.exports = calculate;