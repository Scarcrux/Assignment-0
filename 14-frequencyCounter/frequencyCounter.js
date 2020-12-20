frequencyCounter = (word) => {
  const freq = {};

  word.split('').forEach(letter => {
    if (freq[letter]) {
      freq[letter]++;
    } else {
      freq[letter] = 1;
    }
  });

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;
