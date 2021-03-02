// Create a function that accepts a string and returns 'true' if the string is a valid number
// or 'false' if it is not

function isNumeric(str) {
  return (str - 0) == str && ('' + str).trim().length > 0;
}

console.log(isNumeric("-0123.00"))// true
console.log(isNumeric("+-a13"))// false