// Create a function that takes a string and returns the string in camel case
// A string is in camel case when there are no spaces between words,
// the first letters of each word except the first word is capitalized,
// and all other letters are in lowercase.

function toCamel(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}

console.log(toCamel('let the force flow through you'))