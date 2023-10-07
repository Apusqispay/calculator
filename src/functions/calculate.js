//import firstOperation from "./firstOperation";
//import secondOperation from "./secondOperation";
import { ERROR } from "../reducers/computingReducer";
import trimResult from "./trimResult";

/*const calculate = (expression) => {
    const regexp = /(?<a>-?\d+\.?\d*)(?<optional>(?<op1>[-+*\/rd])(?<b>\d+\.?\d*)(?<op2>[%r])?)?/;
    const parseResult = expression.match(regexp).groups;
    let secondOpResult, firstOpResult, result;

    if(!parseResult.optional) return parseResult.a; //эта строчка нужна, если нужно поместить в state.memory одно число без выполнения операций

    secondOpResult = secondOperation(parseResult);

    firstOpResult = firstOperation(secondOpResult);

    result = trimResult(firstOpResult);

    return String(result);
};*/

const calculate = (expression) => {
    if(/.*%$/.test(expression)) return ERROR;
    const regexp = /(?<a>-?\d+(\.\d+)?)(?<optional>(?<op>[-+*\/rd])(?<b>\d+(\.\d+)?)?)?/;
    const parseResult = expression.match(regexp).groups;
    if(!parseResult.optional) return expression; //для сохранения в памяти

    let result;

    switch (parseResult.op) {
        case '-': result = Number(parseResult.a)-Number(parseResult.b);
        break;
        case '+': result = Number(parseResult.a)+Number(parseResult.b);
        break;
        case '*': result = Number(parseResult.a)*Number(parseResult.b);
        break;
        case '/': result = Number(parseResult.a)/Number(parseResult.b);
        break;
        case 'r': result = Math.sqrt(Number(parseResult.a));
        break;
        case 'd': result = Number(parseResult.a)**Number(parseResult.b);
        break;
        default: result = ERROR;
    };
    return String(trimResult(result));
};

export default calculate;