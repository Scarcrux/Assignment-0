countOfAllIndexMatchingNumbers = (nums) => {
  return nums.reduce((acc, num, idx) =>
    num === idx ? acc + 1 : 0
  , 0);
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
