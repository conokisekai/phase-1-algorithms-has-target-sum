// Pseudocode:
// Initialize an empty set called seenNumbers.
// Iterate through each number in the input array.
//   Calculate the complement by subtracting the current number from the target.
//   Check if the complement exists in the seenNumbers set.
//   If it does, return true (a pair is found).
//   Otherwise, add the current number to the seenNumbers set.
// If the loop completes without finding a pair, return false.

function hasTargetSum(array, target) {
  // Initialize an empty set called seenNumbers.
  const seenNumbers = new Set();

  // Iterate through each number in the input array.
  for (const number of array) {
    // Calculate the complement by subtracting the current number from the target.
    const complement = target - number;

    // Check if the complement exists in the seenNumbers set.
    if (seenNumbers.has(complement)) {
      return true; // a pair is found
    }

    // Otherwise, add the current number to the seenNumbers set.
    seenNumbers.add(number);
  }

  // If the loop completes without finding a pair, return false.
  return false;
}

// Export the hasTargetSum function to make it accessible from other modules.
module.exports = hasTargetSum;

console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([4], 4));
