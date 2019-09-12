import shape = require("./IShape");
import circle = require("./Circle");
import triangle = require("./Triangle");

function drawAllShapes(shapesToDraw:shape.IShape)
{
    shapesToDraw.draw();
}

drawAllShapes(new circle.Circle());
drawAllShapes( new triangle.Triangle());