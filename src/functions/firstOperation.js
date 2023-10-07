import { ERROR } from "../reducers/computingReducer";

const firstOperation = secondOpResult => {
    let firstOpResult;

    if(secondOpResult === 'ERROR') return secondOpResult;

    switch (secondOpResult.op1) {
        case '-': firstOpResult = Number(secondOpResult.a)-Number(secondOpResult.b);
        break;
        case '+': firstOpResult = Number(secondOpResult.a)+Number(secondOpResult.b);
        break;
        case '*': firstOpResult = Number(secondOpResult.a)*Number(secondOpResult.b);
        break;
        case '/': firstOpResult = Number(secondOpResult.a)/Number(secondOpResult.b);
        break;
        case 'r': firstOpResult = Math.sqrt(Number(secondOpResult.a));
        break;
        case 'd': firstOpResult = Number(secondOpResult.a)**Number(secondOpResult.b);
        break;
        case 'calculated': firstOpResult = secondOpResult.result;
        break;
        default: firstOpResult = ERROR;
    };
    return firstOpResult;
    
};

export default firstOperation;