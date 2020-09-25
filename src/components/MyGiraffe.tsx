import * as React from 'react';

// @ts-ignore
import {Plot, newTable, LineLayerConfig, Table as GiraffeTable} from '@influxdata/giraffe'
import MyPointForm from './MyPointInput';
import * as Points from '../dsources/points';

export interface MyGiraffeProps{

}

let localTable: GiraffeTable;

function updateTable(points: Points.Point[]){

    localTable = newTable(points.length).addColumn('_time', 'time', points.map(point => point.time))
            .addColumn('_value', 'number', points.map(point => point.value));


    return localTable;

}

function addPoint(point: Points.Point){
    // @ts-ignore
    localTable.getColumn('_time').push(point.time);
    // @ts-ignore
    localTable.getColumn('_value').push(point.value);

    return localTable;
}

/*
let table = newTable(5)
    .addColumn('_time', 'time', [1589838401244, 1589838461244, 1589838521244, 1589838581244, 1589838641244])
    .addColumn('_value', 'number', [2.58, 7.11, 4.79, 5.22, 12.92])
*/

const lineLayer = {
    type: "line",
    x: "_time",
    y: "_value",
} as LineLayerConfig;

/*const config = {
    table: updateTable(Points.initPoints(5)),
    layers: [lineLayer],
};*/
let showAxes: boolean = true;

function MyGiraffePlot(){

    const[points, setPoints] = React.useState(Points.getPoints());
    const[table, setTable ] = React.useState(updateTable(points));
    const[config, setConfig] = React.useState({
        layers: [lineLayer],
            table: table,
            showAxes: true,
        width: 450,
        height: 300
    });

    /*let config = {
        table: updateTable(Points.initPoints(5)),
        layers: [lineLayer]
    };*/
    return(
        <div
    style={{
        width: "520px",
            height: "400px",
            margin: "40px",

    }}
    >
    <MyPointForm onSubmit = { (event) => {
        event.preventDefault();
        Points.addPointValue(event.currentTarget.point.value);
        setPoints(Points.getPoints());
        //setTable(updateTable(Points.getPoints()));
        setConfig({
            layers: [lineLayer],
            table: updateTable(Points.getPoints()),
            showAxes: true,
            width: 450,
            height: 300
        })
        event.currentTarget.point.value = "";
        //setTable(addPoint(points[points.length - 1]))
        //alert('Points: ' + JSON.stringify(Points.getPoints()));
    }}/>
            <div>{points.length}</div>
            <div><input type='checkbox' name='showaxes' checked={showAxes}

               onClick={(event)=>{
                   setConfig({
                       layers: [lineLayer],
                       table: updateTable(Points.getPoints()),
                       showAxes: event.currentTarget.checked,
                       width: 450,
                       height: 300
                   });
                    showAxes = event.currentTarget.checked
               }}/> Show Axes</div>


                <Plot config={config}

                />



    </div>
    )
}

export default MyGiraffePlot;
