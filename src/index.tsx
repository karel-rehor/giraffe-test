
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import MyButton from './components/MyButton';
import MyInputForm from './components/MyInput';
import MyGiraffePlot from './components/MyGiraffe';
import MyGiraffeFluxPlot from './components/MyGiraffeFlux'
import MyGiraffeGeo from './components/MyGiraffeGeo'
import * as serviceWorker from './serviceWorker';
import * as Points from './dsources/points';
//import '../node_modules/leaflet/dist/leaflet.css';
//<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />

Points.initPoints(5);

ReactDOM.render(
    <div>
       <div>
           <MyButton className='myButton'><strong>Hello</strong></MyButton>
       </div>
        <div>
          <MyInputForm className='myInput'/>
        </div>
        <div style={{position: 'relative'}}>
           <div style={{border: 'green solid 3px',
               position: "absolute",
               display:"flex",
               flexDirection: "column",
               alignItems: "stretch",
           top: 0,
           left: 0}} className="giraffe-autosizer">
               <h3>Simple Plot</h3>
               <MyGiraffePlot />
            </div >
            <div style={{border: 'blue solid 3px',
                position: "absolute",
                display:"flex",
                flexDirection: "column",
                alignItems: "stretch",
               top: 540,
               left: 0}} className="giraffe-autosizer">
               <h3>Flux Plot</h3>
               <MyGiraffeFluxPlot />
            </div>
            <div style={{border: 'red solid 3px',
                position: "absolute",
                display:"flex",
                flexDirection: "column",
                alignItems: "stretch",
                top: 780,
                left: 0,
                 height: '600px',
                 width: '600px' }}>
                <h3>Geo Widget</h3>
                <MyGiraffeGeo />
            </div>

        </div>
        <div>
            <p>FOOTER</p>
        </div>
    </div>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
