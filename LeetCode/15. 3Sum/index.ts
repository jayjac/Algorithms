function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((a, b) => a - b);
  if(sorted[0] > 0) return [];

  const map = {};
  for(let i = 0; i < sorted.length; i++) {
    const n = sorted[i];
    map[n] = map[n] || {};
    map[n][i] = true;
  }

  // console.log(sorted)
  // console.log(map)
  const alreadyFoundDuos = {};
  const results = []

  for(let j = 0; j < sorted.length - 1; j++) {
    for(let k = j + 1; k < sorted.length; k++) {

      if(k > j + 1 && sorted[k] === sorted[k - 1]) continue;

      const sum = sorted[j] + sorted[k];
      const opposite = map[-sum];
      if(!opposite) {
        //console.log("no opposite of %d", sum)
        continue;
      }
      const keys = Object.keys(opposite);
      for(const key of keys) {
        if(Number(key) !== j && Number(key) !== k) {
          const duo = [sorted[j], sorted[k], sorted[key]].sort((a, b) => a - b);
          const duoString = duo.join(',');
          if(!alreadyFoundDuos[duoString]) {
            alreadyFoundDuos[duoString] = true;
            results.push(duo)
          }
        }
      }
    }
  }

  return results;

};