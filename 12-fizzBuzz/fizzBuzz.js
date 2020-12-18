fizzBuzz = (start, end) => {
  const output = [];

  for (let i = start; i <= end; i++) {
    // Inserts "FizzBuzz" for multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
      continue;
    }
    // Inserts "Fizz" for multiples of 3
    if (i % 3 === 0) {
      output.push("Fizz");
      continue;
    }
    // Inserts "Buzz" for multiples of 5
    if (i % 5 === 0) {
      output.push("Buzz");
      continue;
    }
    // Inserts the number if it's not a multiple of 3 or 5
    output.push(i)
  }

  return output;
}

// Do not edit this line;
module.exports = fizzBuzz;
