sumOfAllEvenNumbers = (nums) => {
  return nums.filter(num => {
    return num % 2 === 0;
  }).length;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
