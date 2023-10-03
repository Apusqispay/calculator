import Button from "../../calc/Button/Button";
import { inputExp } from "../../../reducers/computingReducer";
import style from "./numberkeys.module.css"

const NumberKeys =(props) => {
    let buttonArray = [];

    for(let i = 0; i<=8; i++) {
        buttonArray.push(<Button inputHandler={() => props.inputHandler(inputExp(`${i+1}`))} value={i+1} key={i}/>);
    };

    buttonArray.push(<Button inputHandler={() => props.inputHandler(inputExp(`0`))} value={"0"} key={9}/>);
    buttonArray.push(<Button inputHandler={() => props.inputHandler(inputExp(`.`))} value={"."} key={10}/>);
    buttonArray.push(<Button inputHandler={() => props.inputHandler(inputExp(`00`))} value={"00"} key={11}/>);

    return <div className={style.numbers}>{buttonArray.map(el => el)}</div>
};

export default NumberKeys;