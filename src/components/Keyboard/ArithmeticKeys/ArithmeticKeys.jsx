import Button from "../../calc/Button/Button";
import { inputExp, calculateResult } from "../../../reducers/computingReducer";
import { useContext } from "react";
import differential from "../../../functions/differential"
import { ContestedState } from "../../calc/Calc";
import style from "./arithmetickeys.module.css";

const ArithmeticKeys = (props) => {
    let stateFromContext = useContext(ContestedState);
    return <div className={style.arithmetic}>
        <Button inputHandler={() => props.inputHandler(differential(inputExp('+'), stateFromContext, props.inputHandler))} value={'+'} key={'+'}/>
        <Button inputHandler={() => props.inputHandler(differential(inputExp('-'), stateFromContext, props.inputHandler))} value={'-'} key={'-'}/>
        <Button inputHandler={() => props.inputHandler(differential(inputExp('*'), stateFromContext, props.inputHandler))} value={'*'} key={'*'}/>
        <Button inputHandler={() => props.inputHandler(differential(inputExp('/'), stateFromContext, props.inputHandler))} value={'/'} key={'/'}/>
        <Button inputHandler={() => props.inputHandler(differential(inputExp('r'), stateFromContext, props.inputHandler))} value={'r'} key={'r'}/>
        <Button inputHandler={() => props.inputHandler(differential(inputExp('d'), stateFromContext, props.inputHandler))} value={'d'} key={'d'}/> 
        <Button inputHandler={() => props.inputHandler(differential(inputExp('%'), stateFromContext, props.inputHandler))} value={'%'} key={'%'}/>
        <Button inputHandler={() => props.inputHandler(calculateResult())} value={'='} key={'='}/>
    </div>
};

export default ArithmeticKeys;