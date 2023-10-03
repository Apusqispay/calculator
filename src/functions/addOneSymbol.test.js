import addOneSymbol from "./addOneSymbol";

it('forbids zero at beginning of number', () => {
    expect(addOneSymbol({exp: '0', error: null, memory: null}, '0')).toStrictEqual({exp: '0', error: null, memory: null});
});

it('frobids second minus before first number', () => {
    expect(addOneSymbol({exp: '-', error: null, memory: null}, '-' )).toStrictEqual({exp: '-', error: null, memory: null});
});

it('forbids second dot in number', () => {
    expect(addOneSymbol({exp: '123.45', error: null, memory: null}, '.')).toStrictEqual({exp: '123.45', error: null, memory: null});
});

it('forbids second operation symbol between two numbers', () => {
    expect(addOneSymbol({exp: '12345+', error: null, memory: null}, '*')).toStrictEqual({exp: '12345+', error: null, memory: null});
});

it('forbids 11+ symbols numbers ', () => {
    expect(addOneSymbol({exp: '12345+1234567890', error: null, memory: null}, '1')).toStrictEqual({exp: '12345+1234567890', error: null, memory: null});
});

it('adds symbols', () => {
    expect(addOneSymbol({exp: '12345+', error: null, memory: null}, '1')).toStrictEqual({exp: '12345+1', error: null, memory: null});
})