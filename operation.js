// Exercise 1: declare 2 variables with names number1 and number 2 then apply Javascript operation: add, subtract, multiply, divide, get remainder to them

// Exercise 2: wite a operation to convert the Celsius temperature to Fahrenheit.

const number1 = 20 ; 
const number2 = 10 ;
 
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1/number2);
console.log(number1 % number2);

//Formula	F =(°C * 9/5) + 32 //

function convertCtoF(celsius) {
let fahrenheit = (celsius * 9/5) + 32 ;
return fahrenheit ;

}
result = console.log(convertCtoF(37));
