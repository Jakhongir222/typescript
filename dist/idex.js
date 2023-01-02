"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
exports.greet = greet;
function isOld(age) {
    return age >= 35;
}
exports.isOld = isOld;
function countOdd(arr) {
    return arr.filter(num => num % 2 !== 0).length;
}
exports.countOdd = countOdd;
function sumEven(arr) {
    return arr.filter(num => (num % 2 === 0))
        .reduce((sum, curr) => sum + curr, 0);
}
exports.sumEven = sumEven;
