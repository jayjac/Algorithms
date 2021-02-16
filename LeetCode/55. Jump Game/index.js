/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;

    const set = new Map();
    const endIndex = nums.length - 1;
    set.set(0, true);

    for(let j = 0; j < nums.length; j++) {
        if(!nums[j] || !set.has(j)) continue;

        if(j > 0 && nums[j] < nums[j - 1]) continue;

        const maxSteps = nums[j];

        for(let i = 1; i <= maxSteps; i++) {
            const nextIndex = j + i;
            if(nextIndex === endIndex) return true;
            set.set(nextIndex, true);
        }
    }

    return set.has(endIndex);


};