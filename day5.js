const fs = require('fs');
const task = +process.argv[2];

const input = fs.readFileSync('input/5.txt', 'utf8');
const steps = input.split('\n');

let numSteps = 0;
let offset;
let currIndex = 0;
const outOfBounds = steps.length;

while (currIndex < outOfBounds) {
  //convert value at current position to a number
  steps[currIndex] = Number(steps[currIndex]);

  //figure out how many steps forward we'll be moving
  offset = steps[currIndex];

  //increment the value at our current position by 1
  if (task === 1) {
    steps[currIndex]++;
  } else {
    if (steps[currIndex] >= 3) {
      steps[currIndex]--;
    } else {
      steps[currIndex]++;
    }
  }
  
  //update our current position
  currIndex += offset;

  //add a step taken
  numSteps++;
}

console.log(numSteps); //336905 for part 1