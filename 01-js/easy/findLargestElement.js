/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largen = -Infinity;
  if (numbers.length === 0) {
    return undefined;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largen) {
      largen = numbers[i];
    }
  }
  return largen;
}

module.exports = findLargestElement;
