countOfAllNumbersSmallerThanTarget = (nums, target) => {
  let count = 0;

  nums.forEach(num => {if (num < target) count++;});

  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
