import firstOperation from "./firstOperation";
import { ERROR } from "../reducers/computingReducer";

it('it passes "ERROR"', ()=>{
    const testData = ERROR;
    expect(firstOperation(testData)).toBe(ERROR);
});

it('deducts succesfully', ()=>{
    const testData = { a: "5", optional: "-2", op1: "-", b: "2", op2: undefined };
    expect(firstOperation(testData)).toBe(3);
});

it('sums succesfully', ()=>{
    const testData = { a: "5", optional: "+2", op1: "+", b: "2", op2: undefined };
    expect(firstOperation(testData)).toBe(7);
});

it('multiplies succesfully', ()=>{
    const testData = { a: "5", optional: "*2", op1: "*", b: "2", op2: undefined };
    expect(firstOperation(testData)).toBe(10);
});

it('divides succesfully', ()=>{
    const testData = { a: "6", optional: "/2", op1: "/", b: "2", op2: undefined };
    expect(firstOperation(testData)).toBe(3);
});

it('square roots succesfully', ()=>{
    const testData = { a: "4", optional: "r3d", op1: "r", b: "3", op2: "d" };
    expect(firstOperation(testData)).toBe(2);
});

it('pows succesfully', ()=>{
    const testData = { a: "4", optional: "d2d", op1: "d", b: "2", op2: "d" };
    expect(firstOperation(testData)).toBe(16);
});

it('passes result when op1="calculated"', ()=>{
    const testData = { a: "4", optional: "calculated2d", op1: "calculated", b: "2", op2: "d", result: 42 };
    expect(firstOperation(testData)).toBe(42);
});