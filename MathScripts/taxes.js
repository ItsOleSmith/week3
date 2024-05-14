function calculate(beforeTaxes){
    var taxes = beforeTaxes * .23
    return taxes.toFixed(2)
}

var income = Math.floor((Math.random()* 50000) + 10000);    //generating the "income" from a random number between 10k an 50k
console.log("Your taxes are 23% of your income which come out to $" + calculate(income) + " from $" + income);
