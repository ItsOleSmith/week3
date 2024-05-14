function fahrenheitToCelsius(fahrenheit){
    //formula
    var celsius = (fahrenheit - 32) * 5/9;
    //Rounding number to the nearest decimail with .toFixed()
    celsius = parseFloat(celsius.toFixed(2))
    return celsius;
}
//output 
console.log(fahrenheitToCelsius(285));





