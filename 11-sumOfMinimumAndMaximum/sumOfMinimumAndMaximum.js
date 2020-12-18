sumOfMinimumAndMaximum = (nums) => {
  let low = nums[0];
  let high = nums[0];

  nums.forEach(num => {
    if (num < low) low = num;
    if (num > high) high = num;
  })

  return low + high;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
