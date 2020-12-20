countOfAllBooleansAndStrings = (arr) => {
  return arr.filter(element => {
    return element === true || element === false ||
      typeof element === "string"
  }).length;

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
