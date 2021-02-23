// Make the classic FizzBuzz algorithm from HackerRank

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Variation: find all numbers that are divisible by three between 1 and 100

function count() {
  let counter = 0
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      counter++
    }
  }
  return counter
}
// console.log(count())