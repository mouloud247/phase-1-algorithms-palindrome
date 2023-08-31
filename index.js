function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  const splitString = word.split('');
  const reversedString = splitString.reverse().join('');
  return word === reversedString;
}

/* 
  Add your pseudocode here
  Convert the input word to lowercase
  Split into an array of characters
  Reverse and join back
  Compare the input string with the reversed string
*/

/*
  Add written explanation of your solution here
  The function accept an input as a string, convert it to lowercase,split it into an array 
  of characters,reverse the array then convert the array into a string again.
  Finally it compares the input with the reversed string. if they are equal it returns "true",
   else it returns "false".

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
