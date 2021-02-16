function permute(nums: number[]): number[][] {
  if(nums.length === 1) return [[nums[0]]];

  if(nums.length === 2) return [[nums[0], nums[1]], [nums[1], nums[0]]];

  const results = [];

  for(const num of nums) {
    const arr = permute(nums.filter(n => n !== num));
    const res = arr.map(a => [num, ...a])
    for(const r of res) {
      results.push(r);
    }
  }
  return results;
};