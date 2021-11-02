/*
Remove all exclamation marks from the end of sentence.
Examples:
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(s){
  var i = s.length - 1;
  while(s[i] == "!"){
   i--;
  }
  return s.substring(0, i + 1);
}