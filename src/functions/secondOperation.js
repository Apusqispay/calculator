import { ERROR } from "../reducers/computingReducer";

const secondOperation = parseResult => {
    let secondOpResult;
    switch(parseResult.op2){ //проверка на рассчёт процентов или извлечение корня из второго числа
        case 'r': secondOpResult = {...parseResult, b: Math.sqrt(Number(parseResult.b)), op2: undefined};
        break;
        case '%': if(parseResult.op1 !== '*') return parseResult = ERROR; secondOpResult = {...parseResult, result: Number(parseResult.a)/100*Number(parseResult.b), op1: 'calculated'};
        break;
        default: secondOpResult = {...parseResult};
        break;
    };
    return secondOpResult;
};

export default secondOperation;