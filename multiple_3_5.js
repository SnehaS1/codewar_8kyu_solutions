// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let sum = 0;
  Array(number - 1)
    .fill(0)
    .map((v, i) => {
      const val = number - 1 - i;
      if (val % 3 === 0 || val % 5 === 0) {
        sum += val;
      }
    });

  return sum;
}
