//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function larger25(x) {
  return x >= 25;
}
console.log(numbers.filter(larger25));

function divided5(x) {
  return x % 5 == 0;
}
console.log(numbers.filter(divided5));
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared. 
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function squared(x) {
  return x * x;
}
const newsquard = numbers.map(squared);
console.log(newsquard);
function mult2(n) {
  return n * 2;
}
const newdouble = numbers.map(mult2);
console.log(newdouble);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function sq20(x) {
  return x >= 20;
}
function mult3(x) {
  return x * 3;
}
console.log(numbers.filter(sq20).map(squared));
console.log(numbers.filter(divided5).map(mult3));
