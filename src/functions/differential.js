import { calculateResult, clear, inputExp } from "../reducers/computingReducer";
import trimResult from "./trimResult";

const differential = (action, state, dispatch) => { //устанавливать только на кнопки операций
    let parseResult = state.exp.match(/(?<a>-?\d+\.?\d*)(?<op>[-+*\/rd])?(?<b>\d+\.?\d*)?/).groups;

    if(parseResult.op==='*'&&action.value==='%') {
        dispatch(clear()); 
        dispatch(inputExp(String(trimResult(Number(parseResult.a)/Number(parseResult.b)*100))));
        return action;
    } else if(parseResult.op&&action.value==='r') {
        dispatch(clear());
        dispatch(inputExp(parseResult.a+parseResult.op+trimResult(Math.sqrt(parseResult.b))));
        return action;
    } else if(parseResult.b) {
        dispatch(calculateResult());
        return action;
    }
    else{
        return action;
    }
    




    /*if(/[-+*\/r]/.test(state.exp)){
        dispatch(calculateResult());
        return action;
    } else {
        return action;
    }*/
};

export default differential;