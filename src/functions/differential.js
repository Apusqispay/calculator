import { calculateResult } from "../reducers/computingReducer";

const differential = (action, state, dispatch) => { //устанавливать только на кнопки операций
    if(/[-+*\/r]/.test(state.exp)){
        dispatch(calculateResult());
        return action;
    } else {
        return action;
    }
};

export default differential;