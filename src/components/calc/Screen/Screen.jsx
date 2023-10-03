import style from "./screen.module.css"

const Screen = (props) => {
    let output = props.value;
    if(props.error) output = 'Error, press C or AC'
    return <div>
        <input value={output} readOnly={true} className={style.screen}/>
    </div>
};

export default Screen;