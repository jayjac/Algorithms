function twoSum(nums: number[], target: number): number[] {
  const complements = {};

  if(nums.length < 2) {
    return [];
  }
  for(let i = 0; i < nums.length; i++) {
    complements[nums[i]] = i;
  }
  for(let i = 0; i < nums.length; i++) {
    const complementIndex = complements[target - nums[i]]
    if(typeof complementIndex === "undefined") {
      continue;
    }
    if(complementIndex !== i) {
      return [complementIndex, i];
    }
  }
  return [];
};