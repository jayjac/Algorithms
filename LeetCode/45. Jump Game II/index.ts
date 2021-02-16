function jump(nums: number[]): number {
  const jumpArr = [];
  if(nums.length < 2) return 0;
  if(nums.length === 2) return 1;

  let i = 0;
  while(i < nums.length) {
    jumpArr[i] = 0;
    i++;
  }
  //console.log(jumpArr);
  jumpArr[0] = 0;
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];

    for(let j = 1; j <= n && i + j < nums.length; j++) {

      if(!jumpArr[i + j]) {
        jumpArr[i + j] = jumpArr[i] + 1;
        continue;
      }
      if(jumpArr[i] + 1 < jumpArr[i + j]) {
        jumpArr[i + j] = jumpArr[i] + 1;
      }

      //console.log(jumpArr);
    }
  }

  return jumpArr[nums.length - 1];
};