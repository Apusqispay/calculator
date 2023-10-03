import firstOperation from "./firstOperation";
import secondOperation from "./secondOperation";
import trimResult from "./trimResult";

const calculate = (expression) => {
    const regexp = /(?<a>-?\d+\.?\d*)(?<optional>(?<op1>[-+*\/rd])(?<b>\d+\.?\d*)(?<op2>[%r])?)?/;
    const parseResult = expression.match(regexp).groups;
    let secondOpResult, firstOpResult, result;

    if(!parseResult.optional) return parseResult.a; //эта строчка нужна, если нужно поместить в state.memory одно число без выполнения операций

    secondOpResult = secondOperation(parseResult);

    firstOpResult = firstOperation(secondOpResult);

    result = trimResult(firstOpResult);

    return String(result);
};

export default calculate;