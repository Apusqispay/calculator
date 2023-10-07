import style from "./keyboard.module.css"

const Keyboard =(props) => {
    return <div className={style.keyboard}>{props.children}</div>
};

export default Keyboard;