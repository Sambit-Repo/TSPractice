interface IPoint{
    x:number;
    y:number;
}

function addPoint(p1:IPoint,p2:IPoint):IPoint{
    var x1 = p1.x+p2.x;
    var y1 = p1.y+p2.y;

    var z = {x:x1,y:y1}; 

    console.log(z);
    return z;
}

var newPoint = addPoint({x:2,y:5},{x:3,y:4});

var newPoint = addPoint({x:8.3,y:9.2},{x:7.5,y:6.4});