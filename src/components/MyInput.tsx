import * as React from 'react';
import './MyInput.css';
import * as Points from '../dsources/points'

export interface MyInputProps {
    className?: string;
    divStyle?: string;
    label?: string;
    span?: string;
    color?: string;
    children?: React.ReactNode;
    spellCheck?: boolean;
}

function MyInputForm(props: MyInputProps){

    const[rexVal, setRexVal] = React.useState('type something');
    const[lexVal, setLexVal] = React.useState('type something else');

    let spellCheck = typeof(props.spellCheck) === 'undefined' ? true : props.spellCheck;
    return(
        <div>
    <form onSubmit={(event) => {
        //console.log(JSON.stringify(event));
        event.preventDefault()
        setRexVal(event.currentTarget.rex.value);
        setLexVal(event.currentTarget.lex.value);
        console.log(event.currentTarget.rex.value);
         }}>
        <label>Rex:
        <input id='name-input' name='rex' className="myInput" type='text' spellCheck={spellCheck}/>
        </label>
        <br/>
        <label>Lex:
        <input id='name-input' name='lex' className="myInput" type='text' spellCheck={spellCheck}/>
        </label>
        <br/>
        <input type="submit" />
    </form>
            <div>
                <p>{rexVal}</p>
                <p>{lexVal}</p>
            </div>
        </div>
    )
}

export default MyInputForm;
