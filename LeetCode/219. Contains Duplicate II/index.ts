function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if(typeof map[n] !== "undefined" && i - map[n] <= k) {
      return true;
    }
    map[n] = i;
  }
  return false;
};