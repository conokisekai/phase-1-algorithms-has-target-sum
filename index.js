function hasTargetSum(array, target) {
  // Initialize a set to store seen numbers.
  const seenNumbers = new Set();

  // Iterate through each number in the input array.
  for (const number of array) {
    // Calculate the complement by subtracting the current number from the target.
    const complement = target - number;

    // Check if the complement exists in the seenNumbers set.
    // If it does, a pair is found, and the function returns true.
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Otherwise, add the current number to the seenNumbers set.
    seenNumbers.add(number);
  }

  // If the loop completes without finding a pair, return false.
  return false;
}

// Export the hasTargetSum function to make it accessible from other modules.
module.exports = hasTargetSum;

/* 
  Pseudocode:
  - Initialize an empty set called seenNumbers.
  - Iterate through each number in the input array.
  -   Calculate the complement by subtracting the current number from the target.
  -   Check if the complement exists in the seenNumbers set.
  -   If it does, return true (a pair is found).
  -   Otherwise, add the current number to the seenNumbers set.
  - If the loop completes without finding a pair, return false.
*/

/* 
  Explanation of the solution:
  The function uses a set to store seen numbers. It iterates through the input array,
  calculates the complement of each number with respect to the target, and checks if
  the complement exists in the set. If it does, a pair is found, and the function
  returns true. If the loop completes without finding a pair, the function returns false.
*/

// Sample test cases:
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));
console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
console.log("Expecting: false");
console.log("=>", hasTargetSum([4], 4));
