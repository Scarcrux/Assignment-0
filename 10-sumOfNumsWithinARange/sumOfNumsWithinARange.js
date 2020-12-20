sumOfNumsWithinARange = (nums, start, end) => {
  return nums.filter(num => {
    return num >= start && num <= end;
  }).length;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
