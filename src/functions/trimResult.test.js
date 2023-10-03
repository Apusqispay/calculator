import trimResult from "./trimResult";
import { ERROR } from "../reducers/computingReducer";

it('passes string', () => {
    const testData = 'eRrOr';
    expect(trimResult(testData)).toBe('eRrOr');
});

it('passes number', () => {
    const testData = 123456789;
    expect(trimResult(testData)).toBe(123456789);
});

it('passes fewer than 11 characters negative fractional number', () => {
    const testData = -123.56789;
    expect(trimResult(testData)).toBe(-123.56789);
});

it('returns ERROR when trying to pass 11 and more characters positive integer number', () => {
    const testData = 12345678900;
    expect(trimResult(testData)).toBe(ERROR);
});