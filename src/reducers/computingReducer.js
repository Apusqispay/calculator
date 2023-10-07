import calculate from "../functions/calculate";
import inputExpression from "../functions/inputExpression";

const CLEAR = 'CLEAR';
const ALLCLEAR = 'ALLCLEAR';
const SAVEMEMORY = 'SAVEMEMORY';
const READMEMORY = 'READMEMORY';
const PLUSMEMORY = 'PLUSMEMORY';
const MINUSMEMORY = 'MINUSMEMORY';
const CLEARMEMORY = 'CLEARMEMORY';
const INPUT = 'INPUT';
const CALCULATE = 'CALCULATE';
const ERROR = 'ERROR';

const computingReducer = (state, action) => {
    let dump = null;

    switch(action.type) { 
        case CLEAR: return {
            exp: '0',
            error: null,
            memory: state.memory,
        };
        case ALLCLEAR: return {
            exp: '0',
            error: null,
            memory: null,
        };

        case INPUT: if(state.error) break; return inputExpression(state, action.value);

        case SAVEMEMORY: if(state.error) break; dump = calculate(state.exp); if(dump===ERROR)   return {...state, error: ERROR};
                                                                                                return {...state, exp: dump, memory: dump};
        case READMEMORY: if(state.error) break; return {...state, exp: state.memory};

        case PLUSMEMORY: if(state.error) break; dump = calculate(state.exp); if(dump===ERROR)   return {...state, error: ERROR}; 
                                                      dump = String(Number(state.memory)+Number(dump)); return {...state, memory: dump, exp: dump};
                                                                                                
        case MINUSMEMORY: if(state.error) break;  dump = calculate(state.exp); if(dump===ERROR) return {...state, error: ERROR}; 
                                                      dump = String(Number(state.memory)-Number(dump)); return {...state, memory: dump, exp: dump};
        case CLEARMEMORY: if(state.error) break; return {...state, memory: null};

        case CALCULATE: if(state.error) break; return {...state, exp: calculate(state.exp)}

        default: return state;
    }
}

//controls
const clear    = () => ({type: CLEAR});
const allClear = () => ({type: ALLCLEAR});

//memory
const saveMemory = () => ({type: SAVEMEMORY});
const readMemory = () => ({type: READMEMORY});
const plusMemory = () => ({type: PLUSMEMORY});
const minusMemory = () => ({type: MINUSMEMORY});
const clearMemory = () => ({type: CLEARMEMORY});

//input
const inputExp = value => ({type: INPUT, value});

//calculate
const calculateResult = () => ({type: CALCULATE});

export {computingReducer, clear, allClear, saveMemory, readMemory, plusMemory, minusMemory, clearMemory, inputExp, calculateResult, ERROR};