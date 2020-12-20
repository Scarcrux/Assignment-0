frequencyCounter = (word) => {
  const freq = {};
  const letters = word.split('');

  letters.forEach(letter => {
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
