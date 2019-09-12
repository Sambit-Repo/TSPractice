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
