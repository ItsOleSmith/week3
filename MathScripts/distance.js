function calculate(x1, y1, x2, y2) {
var  a = x2 - x1
var  b = y2 - y1

distance = Math.floor(a * a + b * b);
return distance;
}

console.log("The distance between (x1, y1) and (x2, y2) number are " + calculate(2, 4, 4, 8));
