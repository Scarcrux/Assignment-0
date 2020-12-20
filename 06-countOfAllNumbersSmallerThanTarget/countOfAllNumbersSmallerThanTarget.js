countOfAllNumbersSmallerThanTarget = (nums, target) => {
  return nums.filter(num => {
    return num < target;
  }).length;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
