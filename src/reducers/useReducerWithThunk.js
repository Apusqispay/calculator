import { useReducer, useCallback } from "react";

const useReducerWithThunk = (reducer, initialState) => { //подсмотрел в интернетах
    let [state, originalDispatch] = useReducer(reducer, initialState);

    let enhancedDispatch = useCallback(action =>{
        if(typeof(action) === 'function') {
            action(originalDispatch);
        } else {
            originalDispatch(action);
        }
    }, [originalDispatch]);

    return [state, enhancedDispatch]
};

export default useReducerWithThunk;