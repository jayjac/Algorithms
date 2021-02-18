function majorityElementWithMoore(nums) {
    let candidate;
    let count = 0;

    for (let elem of nums) {
        if (count === 0) {
            candidate = elem;
        }
        if (candidate === elem) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

const c = majorityElementWithMoore([1, 1, 2, 2, 3]);
console.log("Majority is %d", c);