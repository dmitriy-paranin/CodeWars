/*
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

//My solution 1

const remainder = (a, b) => {
  if(a === 0 || b === 0) {
    return NaN
  } else if(a > b) {
    return a % b    
  } else return b % a;   
}

//My solution 2

const remainder = (a, b) => {
  return a > b ? a % b : b % a;
}