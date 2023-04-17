const numbers = [1, 2, 3, 4, 5];

// Using forEach to console.log the element in the array

// Using forEach to console.log the element with its index in the array

numbers.forEach((num) => {
  console.log(num);
});

numbers.forEach((num, index) => {
  console.log(`The element at index ${index} is : ${num}`);
});
