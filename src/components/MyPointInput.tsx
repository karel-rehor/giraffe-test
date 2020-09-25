import * as React from 'react';
import './MyInput.css';
import * as Points from '../dsources/points'

export interface MyPointFormProps {
    onSubmit(event: any): any;
}

function MyPointForm(props: MyPointFormProps){

    return(
        <div>
       <form onSubmit={props.onSubmit}>
           <label>New Point Value:
               <input id='point-input' name='point' className="myInput" type='number' step="0.01" />
           </label>
           <br/>
           <input type="submit" />
       </form>
       </div>
    );
}

export default MyPointForm;
