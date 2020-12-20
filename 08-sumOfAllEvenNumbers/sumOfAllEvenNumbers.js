sumOfAllEvenNumbers = nums => {
  let count = 0;

  nums.forEach(num => {
    if (num % 2 === 0) count++;
  });

  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
