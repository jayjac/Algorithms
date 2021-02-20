
function sumSquareOfDigits(n: number) {
  const result = (n + "").split('').map(Number).reduce((acc, num) => acc + (num * num), 0);
  // console.log((n + "").split('').map(Number))
  // console.log("Result for n=%d is %d", n, result);
  return result
}

function isHappy(n: number): boolean {
  if(n === 0) return false;
  if(n === 1) return true;
  const alreadySeenNumber = {};
  let sum = sumSquareOfDigits(n);
  while(sum !== 1 && !alreadySeenNumber[sum]) {
    alreadySeenNumber[sum] = true;
    sum = sumSquareOfDigits(sum);
  }
  return sum === 1;
};