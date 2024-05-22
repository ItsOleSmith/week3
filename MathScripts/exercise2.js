//inputs 
var foodCost = 79.25 , 
tax = 6.54 , 
tip = 12.00;
// formula calculations 
var totalDue = foodCost + tax + tip;
//output 
console.log("Food cost is " + foodCost + " and tax is " + tax);
//rewriting the tip to show the decimal point with .toFixed()
console.log("Tip is " + tip.toFixed(2))
console.log("The  total due is " + totalDue)
