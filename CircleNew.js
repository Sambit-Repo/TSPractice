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
