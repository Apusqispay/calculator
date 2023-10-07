import Screen from "./Screen/Screen";
import Keyboard from "./Keyboard/Keyboard";
import NumberKeys from "./Keyboard/NumberKeys/NumberKeys";
import ArithmeticKeys from "./Keyboard/ArithmeticKeys/ArithmeticKeys";
import ControlKeys from "./Keyboard/ControlKeys/ControlKeys";
import MemoryKeys from "./Keyboard/MemoryKeys/MemoryKeys";
import { computingReducer } from "../../reducers/computingReducer";
import useReducerWithThunk from "../../reducers/useReducerWithThunk";
import { createContext } from "react";
import styles from "./calc.module.css";

const initialState = {
    exp: '0',
    error: null,
    memory: null,
};

let ContestedState = createContext(initialState);

const Calc = () => {
    let [state, dispatch] = useReducerWithThunk(computingReducer, initialState);
    
    return <div className={styles.calc}>
        <ContestedState.Provider value={state}>
            <Screen value={state.exp} error={state.error}/>
            <Keyboard>
                <MemoryKeys inputHandler={dispatch}/>
                <ControlKeys inputHandler={dispatch}/>
                <NumberKeys inputHandler={dispatch}/>
                <ArithmeticKeys inputHandler={dispatch}/>
            </Keyboard>
        </ContestedState.Provider>
    </div>
}

export {ContestedState};
export default Calc;