function calculate(departmentNumber){
    let departmentName;
    switch(departmentNumber){
        case 1:
            departmentName = "Marketing";
            break;
        case 5:
            departmentName = "Human Resources";
            break;
        case 10:
            departmentName = "Accounting";
            break;
        case 12:
            departmentName = "Legal";
            break;
        case 18:
            departmentName = "IT";
            break;
        case 20:
            departmentName = "Customer Relations";
            break;
        default:
            departmentName = "<unknown>";
    }
    return departmentName;

}

console.log(calculate(1));
console.log(calculate(5));
console.log(calculate(10));
console.log(calculate(12));
console.log(calculate(18));
console.log(calculate(20));
console.log(calculate(2));
console.log(calculate(30));
console.log(calculate(15));

