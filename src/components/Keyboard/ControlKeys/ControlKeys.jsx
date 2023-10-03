import Button from "../../calc/Button/Button";
import { clear, allClear } from "../../../reducers/computingReducer";
import style from "./controlkeys.module.css"

const ControlKeys = (props) => {
    return <div className={style.control}>
        <Button inputHandler={() => props.inputHandler(clear())} value={'C'} key={'C'}/> 
        <Button inputHandler={() => props.inputHandler(allClear())} value={'AC'} key={'AC'}/> 
    </div>
};

export default ControlKeys;