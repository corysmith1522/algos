// Given a factor of N, find all factors of N
// example: if n = 6, return (1, 2, 3, 6)

function factors(number) {
  let factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) factors.push(i) 
  }
  return factors;
} 
console.log(factors(6))