import calculate from "./calculate";

it('returns unchanged exp if it doesnot contain operations', ()=>{
    const testExp = '123';
    expect(calculate(testExp)).toBe('123');
});

it('sums correctly', () => {
    const testData = '1+2';
    expect(calculate(testData)).toBe('3');
});

it('return "ERROR"', () => {
    const testData = '1+2%';
    expect(calculate(testData)).toBe("ERROR");
});

it('deducts correctly', () => {
    const testData = '-1+2';
    expect(calculate(testData)).toBe('1');
});