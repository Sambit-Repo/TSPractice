var arrayA1 = [1, 2, 3, 4, 5];
var arrayA2 = new Array(4); // here no doesnot matter
arrayA2 = ["sam", "am", "m", "ms", "sa", "as"];
var arrayA3 = new Array(9, 8, 7, 6);
var x1 = arrayA1[0], x2 = arrayA1[1], x3 = arrayA1[2], x4 = arrayA1[3];
console.log(x4);
console.log(x3);
console.log(x2);
console.log(x1);
console.log(arrayA1);
console.log(arrayA2);
console.log(arrayA3);
var tuppleT1 = [1, "dwadw", 0.25, true];
var tuppleT2 = [];
tuppleT2[0] = 1;
tuppleT2[1] = 2;
tuppleT2[3] = "z";
tuppleT2[4] = false;
for (var i = 0; i < tuppleT1.length; i++) {
    console.log("t1 values-->" + tuppleT1[i]);
    console.log("t2 values-->" + tuppleT2[i]);
}
tuppleT1[5] = false;
console.log(tuppleT1);
var uniounU1;
uniounU1 = 10;
console.log(uniounU1);
uniounU1 = "sasas";
console.log(uniounU1);
function show(x) {
    console.log("---------");
    if (typeof x == "number")
        console.log(x + " is  number type");
    else if (typeof x == "boolean")
        console.log(x + " is boolean type");
    else
        console.log(x + "is string[] type");
}
show(["a", "c", "z"]);
show(10);
show(true);
