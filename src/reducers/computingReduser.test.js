import { computingReducer, clear, allClear, inputExp, ERROR, saveMemory, readMemory, plusMemory, minusMemory, clearMemory, calculateResult } from "./computingReducer";

let testState = {
    exp: '2',
    error: null,
    memory: '4',
}

it('clears all except memory', ()=>{
    expect(computingReducer(testState, clear())).toStrictEqual({exp: '0', error: null, memory: '4',})
});

it('clears all', ()=>{
    expect(computingReducer(testState, allClear())).toStrictEqual({exp: '0', error: null, memory: null});
});

it('returns nothing because of error', ()=>{
    expect(computingReducer({exp: '2', error: ERROR, memory: '4'}, inputExp())).toBe(undefined);
});

it('adds 1 to exp string', ()=>{
    expect(computingReducer(testState, inputExp('1'))).toStrictEqual({exp: '21', error: null, memory: '4'});
});

it('returns nothing because of ERROR', ()=>{
    expect(computingReducer({exp: '2', error: ERROR, memory: '4'}, saveMemory())).toBe(undefined);
});

it('returns ERROR because of error in calculation', ()=>{
    expect(computingReducer({exp: '2+2%', error: null, memory: '4'}, saveMemory())).toStrictEqual({exp: '2+2%', error: ERROR, memory: '4'});
});

it('saves 2 into memory', ()=>{
    expect(computingReducer(testState, saveMemory())).toStrictEqual({exp: '2', error: null, memory: '2'});
});

it('reads from memory succesfully', ()=>{
    expect(computingReducer(testState, readMemory())).toStrictEqual({exp: '4', error: null, memory: '4',});
});

it('sums memory and exp result and saves new value', ()=>{
    expect(computingReducer({exp: '2+2', error: null, memory: '2'}, plusMemory())).toStrictEqual({exp: '6', error: null, memory: '6',});
});

it('calculates exp and deducts it from memory, then saves', ()=>{
    expect(computingReducer({exp: '2+2', error: null, memory: '2'}, minusMemory())).toStrictEqual({exp: '-2', error: null, memory: '-2',});
});

it('clears memory', ()=>{
    expect(computingReducer(testState, clearMemory())).toStrictEqual({exp: '2', error: null, memory: null,});
});


it('calculates result', ()=>{
    expect(computingReducer({exp: '2+2', error: null, memory: '2'}, calculateResult())).toStrictEqual({exp: '4', error: null, memory: '2',});
});