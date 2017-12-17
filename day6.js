let startingBlocks = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5];

function findMaxBlock(blocks) {
  let maxIdx = 0;
  let maxSize = blocks[0];
  blocks.forEach((block, idx) => {
    if (block > maxSize) {
      maxIdx = idx;
      maxSize = block;
    }
  });

  return maxIdx;
}

function redistributeItems(blocks, maxIdx) {
  let items = blocks[maxIdx];
  blocks[maxIdx] = 0;
  let currIdx = maxIdx + 1;
  while (items > 0) {
    blocks[currIdx % 16]++;
    currIdx++;
    items--;
  }
}

let blockMap = {};
let blocks = startingBlocks;
let numRedistributions = 0;

while (!blockMap[blocks]) {
  blockMap[blocks] = {
    hasSeen: true,
    seenAt: numRedistributions,
  };

  const maxBlock = findMaxBlock(blocks);
  redistributeItems(blocks, maxBlock);
  numRedistributions++;
}

console.log(numRedistributions); //12841
console.log(numRedistributions - blockMap[blocks].seenAt); //loop size = 8038