import differential from "./differential";
import { computingReducer, inputExp } from "../reducers/computingReducer";
//import { useReducer } from "react";
import {act, render} from '@testing-library/react';
import {screen} from '@testing-library/dom'
import userEvent from '@testing-library/user-event';
import useReducerWithThunk from "../reducers/useReducerWithThunk";


let initialState = {exp:'1+1', memory: null, error: null};


let TestElement = (props) =>{
        let [state, dispatch] = useReducerWithThunk(computingReducer, initialState);
        return <div data-testid='test' onClick={() => dispatch(differential(inputExp(props.value), state, dispatch)) }>{state.exp}</div>
    };

it('calculates result of first expression before adding next operation symbol', async ()=>{
    const user = userEvent.setup();
    render(<TestElement value={'+'} id={'test'}/>);
    let elem = screen.getByTestId('test');
    await act(async()=>{await user.click(elem);});
    expect(elem.textContent).toBe('2+');
});

it('replaces first oepration symbol', async ()=>{
    const user = userEvent.setup();
    render(<TestElement value={'*'} id={'test'}/>);
    let elem = screen.getByTestId('test');
    await act(async()=>{await user.click(elem);});
    await act(async()=>{await user.click(elem);});
    expect(elem.textContent).toBe('2*');
});