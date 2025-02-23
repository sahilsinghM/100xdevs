/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let punc = " .?!,";
  let ar = str
    .toLowerCase()
    .split("")
    .filter((chr) => !punc.includes(chr));
  let len = ar.length;
  // if (len === 0) {
  //   return false;
  // }
  for (let i = 0; i < len / 2; i++) {
    if (ar[i] !== ar[len - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("hello"));
module.exports = isPalindrome;
