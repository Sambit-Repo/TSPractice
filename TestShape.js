"use strict";
exports.__esModule = true;
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShapes(shapesToDraw) {
    shapesToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
