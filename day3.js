//functions return the value "n" times above themselves
function bottom(n) {
  return (4 * n * n) - (5 * n) + 2;
}

function left(n) {
  return (4 * n * n) - (7 * n) + 4;
}

function top(n) {
  return (4 * n * n) - (9 * n) + 6;
}

function right(n) {
  return (4 * n * n) - (11 * n) + 8;
}

const myNumber = 368078;
let i;
for (i = 1; i < Number.MAX_VALUE; i++) {
  //find left bound
  console.log(left(i));
  if (left(i) > myNumber) {
    console.log(i, left(i));
    break;
  }
}

const leftVal = left(i - 1);
const topVal = top(i);
const rightVal = right(i);
const bottomVal = bottom(i - 1);

console.log(topVal, rightVal, bottomVal, leftVal);

if (myNumber > topVal) {
  //between max left and top
  console.log('top', topVal);
} else if (myNumber > rightVal) {
  //between top and right
  console.log('right', rightVal);
} else if (myNumber > bottomVal) {
  //between right and bottom
  console.log('bottom', bottomVal);
} else {
  //between bottom and previous left
  i--;
  console.log('prev left', leftVal);
  const leftDiff = myNumber - leftVal;
  console.log('left diff', leftDiff);
  console.log('bottom', bottomVal);
  const bottomDiff = bottomVal - myNumber;
  console.log('bottom diff', bottomDiff);

  if (leftDiff < (i/2)) {
    console.log('on left');
  } else {
    console.log('on bottom');
    //target is bottomDiff units to the left
    console.log(bottomDiff + (i - 1)); //-1 because i=1 is the center
  }
}

/**
 * [[0, 1, 2, 3, 4, 5]  0
 *  [0, 1, 2, 3, 4, 5]  1
 *  [0, 1, 2, 3, 4, 5]  2
 *  [0, 1, 2, 3, 4, 5]] 3
 */

let theArray = [];
for (let i = 0; i < 20; i++) {
  theArray[i] = [];
}

theArray[10][10] = 1;

console.log(theArray);

let nextNum = 1;
let direction = 'right';
let x = 10;
let y = 10;
while(nextNum < myNumber) {
  if (direction === 'right') {
    x++;
    theArray[x][y] = nextNum;
  } else if (direction === 'up') {
    y++;
    theArray[x][y] = nextNum;
  } else if (direction === 'left') {
    y--;
    theArray[x][y] = nextNum;
  } else {
    x--;
    theArray[x][y] = nextNum;
  }

  //figure out next direction
  //which one in the array is null to help find the direction to move in?
  

  //calculate nextNum
  //check 9 squares around "next" square
  //const nextX; const nextY;

  
  
}
