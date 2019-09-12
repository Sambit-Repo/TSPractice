///<reference path = "IShapeNew.ts"/>
var Drawing;
(function (Drawing) {
    var CircleNew = /** @class */ (function () {
        function CircleNew() {
        }
        CircleNew.prototype.draw = function () {
            console.log("Circle is Drawn");
        };
        return CircleNew;
    }());
    Drawing.CircleNew = CircleNew;
})(Drawing || (Drawing = {}));
///<reference path = "IShapeNew.ts"/>
var Drawing;
(function (Drawing) {
    var TriangleNew = /** @class */ (function () {
        function TriangleNew() {
        }
        TriangleNew.prototype.draw = function () {
            console.log("Triangle is Drawn");
        };
        ;
        return TriangleNew;
    }());
    Drawing.TriangleNew = TriangleNew;
})(Drawing || (Drawing = {}));
///<reference path = "IShapeNew.ts"/>
///<reference path = "CircleNew.ts"/>
///<reference path = "TriangleNew.ts"/>
function drawAllShapes(shapesToDraw) {
    shapesToDraw.draw();
}
drawAllShapes(new Drawing.CircleNew());
drawAllShapes(new Drawing.TriangleNew());
