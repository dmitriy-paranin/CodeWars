/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

//My solution 1

function repeatStr (n, s) {
  let a = '';
  for(let i = 0; i < n; i++) {
    a += s;
  } 
  return a;
}

//My solution 2

repeatStr = (n, s) => s.repeat(n)