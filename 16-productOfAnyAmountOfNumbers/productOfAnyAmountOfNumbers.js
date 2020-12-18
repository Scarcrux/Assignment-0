productOfAnyAmountOfNumbers = (...args) => {
  return args.reduce((acc, arg) => {
    return acc * arg;
  }, 1)
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
