// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[j] === complement)
//       return true
//     }
//     return false;
//   }
// }
// BETTER CODE:
 function hasTargetSum(array, target) {
      const seenNumbers = {}
        for(let i = 0; i < array.length; i++) {
          const complement = target - array[i];
          if(seenNumbers[complement])
          return true
          seenNumbers[array[i]] = true
        }
      return false
      }
    
/* 
  o(n^2) because the bigger the array, the longer it will take to loop through
  each element and the j loop creates an exponent. Not the best way to do this. 
*/

/* 
  Loop through index, find two numbers that add up to target sum. Could also use
  if/then. If two numbers add to target sum, return true.
*/

/*
  for each index, if it adds with another index  to equal the target sum, 
  return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("=>", hasTargetSum([4,9,10,11], 8))
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
