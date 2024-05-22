function calculate(payRate , hourWorked){
    const overTimeLimit = 40;
    let overTimePayRate = payRate * 1.5;
    let overTimeHours,
        overTimeGrossPay = 0,
        grossPay;
    if (hourWorked > overTimeLimit){
        overTimeHours = hourWorked - overTimeLimit;
        overTimeGrossPay = overTimePayRate * overTimeHours;
        grossPay = payRate * overTimeLimit;
    } else {
        grossPay = hourWorked * payRate;
    }
    return (overTimeGrossPay + grossPay).toFixed(2);
}
 

console.log(calculate(12.50 , 20));
console.log(calculate(25.00 , 40));
console.log(calculate(17.30 , 45));
