// loop
// 3.1 print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

// 3.2 take any positive number then return sum of its digits. for example number 123 => output :6

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log(`The number ${i} is dividible by 3`);
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(`The number ${i} is not dividible by 5`);
  }
}

function sumOfDigits(numbers) {
  const numToString = numbers.toString();
  let sum = 0;

  for (let i = 0; i < numToString.length; i++) {
    sum = sum + parseInt(numToString[i]);
  }
  return sum;
}
console.log(sumOfDigits(1234));
