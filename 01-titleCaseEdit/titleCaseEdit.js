titleCaseEdit = (title) => {
  const titleCase = title.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return titleCase.join(" ")
}

// Do not edit this line;
module.exports = titleCaseEdit;
