// Compute the factorial of a number and print it on the console.
// Ex: if the user enters 5, the program should caluclate 5 x 4 x 3 x 2 x 1
// Displays as "5! = 120"

function factorial(n) {
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n
}

// console.log(factorial(5))