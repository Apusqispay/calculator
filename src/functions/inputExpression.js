const inputExpression = (state, symbol) => {
    let regexp = /(?<minus>-)?(?<number1>\d+((?<dot1>\.)\d+)?)?(?<op1>[-+*\/rd])?(?<number2>\d+((?<dot2>\.)\d+)?)?(?<op2>[%r])?/;
    let parseResult = state.exp.match(regexp) || {};
    parseResult = parseResult.groups || {};

    if(state.exp==='0') return {...state, exp: symbol};
    if(symbol===parseResult.dot1 || symbol===parseResult.dot2 || symbol===parseResult.minus ) return state;
    if(/[-+*\/%rd]/.test(symbol)&&(!!parseResult.op1)) return state; //
    if(/[%r]/.test(symbol)&&(!!parseResult.op2)) return state;
    if((parseResult.number1&&parseResult.number1.length>=10) || (parseResult.number2&&parseResult.number2.length>=10)) return state;
    
    return {...state, exp: String(state.exp) + String(symbol)};
};

export default inputExpression;