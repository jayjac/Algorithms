function majorityElement(nums: number[]): number[] {
  const map = {};
  const third = Math.floor(nums.length / 3);
  for(const n of nums) {
    map[n] = map[n] || 0;
    map[n]++;
  }
  const keys = Object.keys(map);
  return keys.filter(k => map[k] > third).map(k => Number(k))
};