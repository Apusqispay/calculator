import { ERROR } from "../reducers/computingReducer";

const checkLength = exp => {
    let str = String(exp).replace(/[-\.]/g, '');
    if(String(str).length>10) {
        return ERROR;
    };
    return null;
}

export default checkLength;