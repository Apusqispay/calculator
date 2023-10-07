import calculate from "./calculate";

it('sums correctly', () => {
    const testData = '1+2';
    expect(calculate(testData)).toBe('3');
});

it('deducts correctly', () => {
    const testData = '-1+2';
    expect(calculate(testData)).toBe('1');
});

it('raises to degree correctly', ()=>{
    const testData = '2d2';
    expect(calculate(testData)).toBe('4');
});

it('square roots correctly', ()=>{
    const testData = '16r';
    expect(calculate(testData)).toBe('4');
})