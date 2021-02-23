//You are given an m by n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.

// Example input: accounts = [[1, 2, 3] [3, 2, 1]]
// Output: 6
// Explanation: 
// First customer has wealth = 1 + 2 + 3 = 6
// Second customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered th richest with a wealth of 6, so we return 6.

function maxWealth(accounts) {
  let maximum = 0
  for (let m = 0; m < accounts.length; m++) {
    let value = 0
    for (let n = 0; n < accounts[m].length; n++) {
      value += accounts[m][n]
    }
    maximum = Math.max(maximum, value)
  }
  return maximum
}

// console.log(maxWealth([[1, 2, 3], [3, 2, 1]]))