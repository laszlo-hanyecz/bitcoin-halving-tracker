// Countdown to 4th halving at block 840,000
const TARGET_BLOCK = 840000;
function blocksRemaining(currentBlock) { return TARGET_BLOCK - currentBlock; }
function estimatedDays(currentBlock, avgBlockTime = 10) {
  return (blocksRemaining(currentBlock) * avgBlockTime) / 1440;
}
module.exports = { blocksRemaining, estimatedDays };
