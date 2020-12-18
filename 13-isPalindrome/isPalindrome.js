isPalindrome = (word) => {
  let length = word.length;

  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
