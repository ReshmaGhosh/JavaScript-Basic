// Function
// 2.1 Write a function named greeting and console Hello

// 2.2 Write a function named greeting, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)

// 2.3 Write a function to calculate the sum of  two numbers (there would be 2 parameters in the function)

// 2.4 Write a function to double value of number (there would be 2 parameter in the function)

// Arrow Function
// convert those function above to arrow function

function greetingToYou() {
  console.log("Hello");
}
greetingToYou();

function greetings(name) {
  console.log(`hi ${name}`);
}
greetings("Reshma");

function additon(a, b) {
  let result = a + b;
  return result;
}
console.log(`Sum is ${additon(12, 13)}`);

function dubbleValue(num1, num2) {
  let result = num1 * num2;
  return result;
}
Result = console.log(`The value is ${dubbleValue(10, 20)}`);

// Arrow Function

const greeting1 = () => {
  console.log("Hello");
};
greeting1();

const greeting2 = (name) => {
  console.log(`Hello ${name}`);
};
greeting2("Reshma Ghosh");

const additon1 = (a, b) => {
  let result = a + b;
  return result;
};
console.log(`Sum is ${additon(12, 13)}`);

const dubbleValue1 = (num1, num2) => {
  return num1 * num2;
};
console.log(`The value is ${dubbleValue(10, 20)}`);

const sumNumber = (a, b) => console.log(a + b);
sumNumber(1, 3);
