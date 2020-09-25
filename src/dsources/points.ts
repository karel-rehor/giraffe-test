
export interface Point{
    time: number;
    value: number
}

let points: Point[];

export function initPoints(size: number){

    points = [];

    console.log("DEBUG initPoints called " + new Date());

    let interval: number = 60000;
    let now: number = new Date().getTime();
    let tick: number = now - (interval * size);
    let acorn: number = Math.floor(Math.random() * Math.floor(10.00));

    for(let i = 0; i < size; i++){

        let val;
        if(i === 0){
            val = acorn + (Math.floor(Math.random() * Math.floor(10.00)) - 5.00);
        }else{
            val = points[(i - 1)].value + (Math.floor(Math.random() * Math.floor(10.00)) - 5.00);
        }

        points.push({
            time: tick,
            value: val}
        );

        console.log("DEBUG points[" + i + "]: " + JSON.stringify(points[i]));
        tick += interval;
    }

    return points;
}

export function addPoint(point: Point){
    points.push(point);
}

export function addPointValue(value: number){
    addPoint({time: points[points.length - 1].time + 60000, value: value})
}

export function addNewRandomPoint(tick: number ){
    let val;
    if(points.length === 0){
        val = 5.00 + (Math.floor(Math.random() * Math.floor(10.00)) - 5.00);
    }else{
        val = points[points.length - 1].value + (Math.floor(Math.random() * Math.floor(10.00)) - 5.00);
    }

    points.push({
        time: tick,
        value: val}
    );
}

export function getPoints(){
    return points;
}
