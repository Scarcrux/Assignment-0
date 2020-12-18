pairSum = (nums, target) => {
  let length = nums.length;

  if (length <= 1) throw "Array size is less than 2";

  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length; j++) {
      if (nums[i] + nums[j] === target) return true;
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;
