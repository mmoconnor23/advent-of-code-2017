const fs = require('fs');
const task = +process.argv[2];

const input = fs.readFileSync('input/4.txt', 'utf8');
const lines = input.split('\n');

let numValid = 0;

lines.forEach((line, idx) => {
  const combos = line.split(' ');

  let dupeMap = {};
  let isValid = true;
  combos.forEach((combo) => {
    if (task === 2) { //no anagrams
      const letters = combo.split('');
      letters.sort();
      combo = letters;
    }

    if (dupeMap[combo]) {
      isValid = false;
    } else {
      dupeMap[combo] = true;
    }
  });

  if (isValid) {
    numValid++;
  }
});

console.log(numValid);