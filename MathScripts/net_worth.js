//input 
var foodCost = 79.25 , 
tax = 6.54 , 
tip = 12.00;
//formula 
totalDue = foodCost + tax + tip;
// netWorth formula is total assets - total liabilities. 
netWorth = (foodCost + tip) - tax; 
// to make it round up to the nearest integer  Math.ceil()
tipAmount = Math.ceil(totalDue * .12);
//output
console.log("Your net worth is " + netWorth)
console.log("The tip on a $" + tipAmount.toFixed(2) + " food bill is $"+ totalDue)
