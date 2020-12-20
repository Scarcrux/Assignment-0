setUnionOfAnyAmountOfSets = (...args) => {
  return new Set([].concat(...args.map(set => {
    return [...set];
  })));
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
