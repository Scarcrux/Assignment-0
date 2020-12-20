countOfAllBooleans = (arr) => {
  return arr.filter(element => {
    return element === true || element === false;
  }).length;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
