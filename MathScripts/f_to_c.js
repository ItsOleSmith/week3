function fahrenheitToCelsius(fahrenheit){
    //formula
    var celsius = (fahrenheit - 32) * 5/9;
    //Rounding number to the nearest decimail with .toFixed()
    celsiusFix = parseFloat(celsius.toFixed(2))
    return celsiusFix;
}
//output 
console.log(fahrenheitToCelsius(285));





