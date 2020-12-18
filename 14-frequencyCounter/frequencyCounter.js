frequencyCounter = (word) => {
  const freq = {};
  const letters = word.split('');

  letters.forEach(letter => {
    if (freq[letter] !== undefined) {
      freq[letter] = freq[letter] + 1;
    } else {
      freq[letter] = 1;
    }
  });

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;
