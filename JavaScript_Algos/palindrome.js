// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

function isPalindrome(s) {
  let simplified = s.replace(/\W/g, ''); // removes every non-word character
  let reversed = simplified.split('').reverse().join('');
  return simplified.toLowerCase() == reversed.toLowerCase();
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('race a car')) // false