const fs = require('fs');
const task = +process.argv[2];

const input = fs.readFileSync('input/1.txt', 'utf8');
// const input = '123123';
const inputArray = input.split('');
const inputLength = inputArray.length;

let captcha = 0;

if (task === 1) {
  inputArray.forEach((number, idx) => {
    if (idx === (inputLength - 1)) {
      //at end, compare with first character
      if (number === inputArray[0]) {
        captcha += Number(number);
      }
    } else {
      if (number === inputArray[idx + 1]) {
        captcha += Number(number);
      }
    }
  });
} else { // task 2
  const stepSize = inputLength / 2;

  inputArray.forEach((number, idx) => {
    const idxHalfwayAround = (idx + stepSize) % inputLength;
    if (number === inputArray[idxHalfwayAround]) {
      captcha += Number(number);
    }
  });
}


console.log(captcha);