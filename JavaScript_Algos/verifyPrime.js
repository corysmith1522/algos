// Given a number N, verify if N is prime or not
// Return 1 if N is prime, else return 0

function verifyPrime(number) {
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}
// console.log(verifyPrime(7))
// console.log(verifyPrime(36))