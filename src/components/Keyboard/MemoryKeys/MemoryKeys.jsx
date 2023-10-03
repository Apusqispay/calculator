import Button from "../../calc/Button/Button";
import { saveMemory, readMemory, plusMemory, minusMemory, clearMemory } from "../../../reducers/computingReducer";
import style from "./memorykeys.module.css"

const MemoryKeys = (props) => {
    return <div className={style.memory}>
        <Button inputHandler={() => props.inputHandler(saveMemory())} value={'MS'} key={'MS'}/>
        <Button inputHandler={() => props.inputHandler(readMemory())} value={'MR'} key={'MR'}/> 
        <Button inputHandler={() => props.inputHandler(plusMemory())} value={'M+'} key={'M+'}/> 
        <Button inputHandler={() => props.inputHandler(minusMemory())} value={'M-'} key={'M-'}/> 
        <Button inputHandler={() => props.inputHandler(clearMemory())} value={'MC'} key={'MC'}/> 
    </div>
};

export default MemoryKeys;