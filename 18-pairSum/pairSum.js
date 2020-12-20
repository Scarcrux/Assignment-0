pairSum = (nums, target) => {
  let length = nums.length;
  const numbers = {};

  if (length <= 1) throw "Array size is less than 2";

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (numbers[difference] !== undefined
      && numbers[difference] !== i) {
      return true;
    } else {
      numbers[nums[i]] = i;
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;
