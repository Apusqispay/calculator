import style from "./button.module.css"

const Button = (props) => {
    return <div className={style.wrapper}>
        <button onClick={() => props.inputHandler() } className={style.button}>{props.value}</button>
        </div>
};

export default Button;