function firstMissingPositive(nums: number[]): number {
  let currentInt = 0;

  nums.sort((a, b) => a - b);

  for(const n of nums) {
    if(n > currentInt + 1) {
      break;
    }
    if(n > 0) {
      currentInt = n;
    }
  }

  return currentInt + 1;

};