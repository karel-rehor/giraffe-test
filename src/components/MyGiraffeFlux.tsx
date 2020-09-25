import * as React from 'react';

import {Plot, fromFlux, LineLayerConfig} from '@influxdata/giraffe'

const fluxResultCSV = `#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string,string
#group,false,false,true,true,false,false,true,true,true,true
#default,_result,,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,example,location
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T18:31:33.95Z,29.9,value,temperature,index.html,browser
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T18:55:23.863Z,28.7,value,temperature,index.html,browser
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T19:50:52.357Z,15,value,temperature,index.html,browser
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T19:53:37.198Z,24.8,value,temperature,index.html,browser
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T19:59:53.033Z,23,value,temperature,index.html,browser
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T20:19:21.88Z,20.1,value,temperature,index.html,browser
,,0,2020-03-25T20:58:15.731129Z,2020-04-24T20:58:15.731129Z,2020-04-03T22:20:40.776Z,28.7,value,temperature,index.html,browser
`
const dataFromFlux = fromFlux(fluxResultCSV)

const lineLayer = {
    type: "line",
    x: "_time",
    y: "_value",
}  as LineLayerConfig;

const config = {
    width: 150,
    height: 100,
    table: dataFromFlux.table,
    layers: [lineLayer],
};

function MyGiraffeFluxPlot(){

    return(
    <div style={{
        width: "100%",
        height: "100%",
        margin: "40px" }}
    >
        <Plot config={config} />
    </div>
    );

}

export default MyGiraffeFluxPlot;
