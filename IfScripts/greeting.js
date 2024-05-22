function calculate(time){
    var greeting;

    if (time <= 9){
        greeting = "Good morning!";
    }
    else if ( time <= 16){
        greeting = "Good day!";
    }
    else if ( time <= 23){
        greeting = "Good evening!";
    }
    return greeting;
}

console.log(calculate(9));
console.log(calculate(15));
console.log(calculate(19));
console.log(calculate(0));
console.log(calculate(10));
console.log(calculate(17));
console.log(calculate(23));
console.log(calculate(16));


