import checkLength from "./checkLength";
import { ERROR } from "../reducers/computingReducer";

const trimResult = calcResult => {
    let checkLengthResult = checkLength(calcResult);

    if(typeof(calcResult) === 'string') return calcResult; //проверка на ошибки
    if(!checkLengthResult) return calcResult;
    if(checkLengthResult&&(calcResult === calcResult - calcResult%1)) return ERROR; //проверка на длинну целой части более 10 символов
    return Number((calcResult.toFixed(10-calcResult%1).replace(/(?<=.+\.)(0)*$/, '')));
}

export default trimResult;