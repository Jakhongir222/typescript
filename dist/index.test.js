"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const idex_1 = require("./idex");
describe('ts tests', () => {
    it('get greeting', () => {
        // arrange
        const birthYear = 1972;
        const name = 'Marcus';
        // act
        const result = (0, idex_1.greet)(name, birthYear);
        // assert
        assert_1.default.strictEqual(result, result);
    });
});
it('returns true if age is above 35', () => {
    // act
    const is34Old = (0, idex_1.isOld)(34);
    const is35Old = (0, idex_1.isOld)(35);
    const is36Old = (0, idex_1.isOld)(36);
    // assert
    assert_1.default.strictEqual(is34Old, false);
    assert_1.default.strictEqual(is35Old, true);
    assert_1.default.strictEqual(is36Old, true);
});
it('fun with variables', () => {
    // act
    let name = 'Marcus';
    let nameImplicit = 'Marcus';
    let nameImplicit2 = name;
    const cool = true;
    const birthYear = 1972;
    // arrange
    assert_1.default.strictEqual(typeof (cool), 'boolean');
    assert_1.default.strictEqual(typeof (birthYear), 'number');
    assert_1.default.strictEqual(typeof (name), 'string');
    assert_1.default.strictEqual(typeof (nameImplicit), 'string');
    assert_1.default.strictEqual(typeof (nameImplicit2), 'string');
});
it('arrays are typed in ts', () => {
    const names = ['Marcus', 'Julia', 'Catherine'];
    const firstFive = [1, 2, 3, 4, 5];
    console.log(firstFive, names);
});
it('count odd numbers', () => {
    // arrange
    const firstFive = [1, 2, 3, 4, 5];
    // act
    const numberOfOdds = (0, idex_1.countOdd)(firstFive);
    // arrange
    assert_1.default.strictEqual(numberOfOdds, 3);
});
it('sum event numbers', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // act
    const sum = (0, idex_1.sumEven)(nums);
    // arrange
    assert_1.default.strictEqual(sum, 30);
});
