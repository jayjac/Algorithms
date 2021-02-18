function summaryRanges(nums: number[]): string[] {

  if(!nums.length) {return []};

  if(nums.length === 1) {
    return [`${nums[0]}`];
  }
  const ranges = [];

  let startIndex = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i + 1] > nums[i] + 1) {
      if(i === startIndex) {
        ranges.push(`${nums[i]}`)
      } else {
        ranges.push(`${nums[startIndex]}->${nums[i]}`)
      }
      startIndex = i + 1;
    }
  }
  const endIndex = nums.length - 1;
  if(startIndex === endIndex) {
    ranges.push(`${nums[startIndex]}`)
  } else {
    ranges.push(`${nums[startIndex]}->${nums[nums.length - 1]}`)
  }

  return ranges;

};