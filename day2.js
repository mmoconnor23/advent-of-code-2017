const fs = require('fs');
const task = +process.argv[2];

const input = fs.readFileSync('input/2.txt', 'utf8');
const lines = input.split('\n');

let checksum = 0;

lines.forEach((line, idx) => {
  const nums = line.split('\t');

  if (task === 1) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    checksum += (Number(max) - Number(min));
  } else { // task 2
    const set = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
        if ((Number.isInteger(nums[i] / nums[j]) || 
             Number.isInteger(nums[j] / nums[i])) && i !== j) {

          const division = Number(nums[i]) > Number(nums[j]) ? 
            { top: nums[i], bottom: nums[j] } : { top: nums[j], bottom: nums[i] };

          if (!set.find((item) => item.top === division.top)) {
            set.push(division);
            checksum += (division.top / division.bottom);
          }

          break;
        }
      }
    }
  }
});

console.log(checksum);