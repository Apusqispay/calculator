import secondOperation from "./secondOperation";
import { ERROR } from "../reducers/computingReducer";

it('square roots second number succesfully', ()=>{
    const testData = { a: "1", optional: "+4r", op1: "+", b: "4", op2: "r" };
    expect(secondOperation(testData)).toStrictEqual({ a: "1", optional: "+4r", op1: "+", b: 2, op2: undefined });
});

it('returns ERROR when passed incorrect exp to get %', ()=>{
    const testData = { a: "100", optional: "/50%", op1: "/", b: "50", op2: "%" };
    expect(secondOperation(testData)).toBe(ERROR);
});

it('calculates persent succesfully', ()=>{
    const testData = { a: "200", optional: "*50%", op1: "*", b: "50", op2: "%" };
    expect(secondOperation(testData)).toStrictEqual({ a: "200", optional: "*50%", op1: "calculated", b: "50", op2: "%", result: 100 });
});

it('pass the expression unchanged when there is no op2', ()=>{
    const testData = { a: "1", optional: "+1", op1: "+", b: "1", op2: undefined };
    expect(secondOperation(testData)).toStrictEqual({ a: "1", optional: "+1", op1: "+", b: "1", op2: undefined })
});