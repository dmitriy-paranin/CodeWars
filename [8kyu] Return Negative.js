/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  
}
*/

//My solution

function makeNegative(num) {
  if(num > 0) {
    num = -1 * num;
    return num;
  } else {
    return num;
  };
}
