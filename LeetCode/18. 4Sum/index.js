/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            map[sum] = map[sum] || [];
            map[sum].push([i, j]);
        }
    }

    //console.log(map);

    const results = [];

    const alreadyUsed = {};


    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if(map[target - sum]) {
                for(const [a, b] of map[target - sum]) {
                    if(a === i || a === j || b === i || b === j) continue;

                    const r = [nums[a],nums[b], nums[i], nums[j]].sort((a, b) => a - b);
                    //console.log(r.toString())
                    const rString = r.toString();
                    if(!alreadyUsed[rString]) {
                        results.push(r);
                        alreadyUsed[rString] = true
                    }

                }

            }
        }
    }


    //console.log(result)


    return results;

};