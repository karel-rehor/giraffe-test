import * as React from 'react';
import './MyButton.css'


export interface MyButtonProps {
    className?: string;
    divStyle?: string;
    label?: string;
    span?: string;
    color?: string;
    children?: React.ReactNode;
}

function MyButton(props: MyButtonProps){
    return(

        <div className={props.className}
                color={props.color}
                data-testid="test-button"
                onClick={() => {alert('hello')}}
                style={{color: '#ffffff'}}
        >{props.children}</div>

    );
}




/*
const MyButton: React.FC<MyButtonProps> = ({children}) => children as JSX.Element;
*/

export default MyButton;
