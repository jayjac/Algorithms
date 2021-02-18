function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const indexMap = {};
  //const valueMap = {};

  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const toDeleteIndex = i - k - 1;
    if(toDeleteIndex >= 0) {
      delete indexMap[toDeleteIndex];
    }
    // for(let l = i - k; l < i; l++) {
    //     if(Math.abs(indexMap[l] - n) <= t) {
    //         return true
    //     }
    // }
    const keys = Object.keys(indexMap);
    for(const k of keys) {
      if(Math.abs(indexMap[k] - n) <= t) {
        return true
      }
    }
    indexMap[i] = n;
    //console.log(indexMap)
  }
  return false;
};