countOfAllBooleansAndStrings = (arr) => {
  let count = 0;

  arr.forEach(element => {if (element === true || element === false || typeof element === "string") count++;});

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
