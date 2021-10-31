/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
*/

//My solution

function squareArea(a) {
  let r = (2 * a) / (Math.PI);
  let s = (r * r).toFixed(2);
  return Number(s);
}