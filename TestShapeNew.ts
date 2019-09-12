///<reference path = "IShapeNew.ts"/>
///<reference path = "CircleNew.ts"/>
///<reference path = "TriangleNew.ts"/>

function drawAllShapes(shapesToDraw:Drawing.IShape){
    shapesToDraw.draw();
}

drawAllShapes(new Drawing.CircleNew());
drawAllShapes(new Drawing.TriangleNew())