var x = 3;
var y = 20;

function sum(x, y) {
    if  (x + y < 100) {
        return true;
    } else false;
}
var result = sum(50,40);
console.log(result);

function convert(x, y) {
    return x * 3600 + y * 180;
}
var result = convert(3,20);
console.log(result);

function score(x, y, z) {
    return x * 3 + y * 1 + z * 0;
}

var result = score(4,2,3);
console.log(result);

function makePair(x,y) {
    return color = [x,y]
}

var result = makePair(1,7);
console.log(result);

var result = makePair("hello","world");
console.log(result);
