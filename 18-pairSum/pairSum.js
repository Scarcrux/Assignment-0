pairSum = (nums, target) => {
  const numbers = {};
  let length = nums.length;

  if (length <= 1) throw "Array size is less than 2";

  for (let i = 0; i < length; i++) {
    let difference = target - nums[i];

    if (difference in numbers) {
      return true;
    }
    numbers[nums[i]] = i;
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;
