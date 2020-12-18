setUnionOfAnyAmountOfSets = (...args) => {
  const mergedSet = new Set();

  args.forEach(set => {
    set.forEach(element => mergedSet.add(element));
  });

  return mergedSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
