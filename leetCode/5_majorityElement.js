function solve(nums) {
    let candidate = null;
    let count = 0;

    // First pass: Find potential candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }

    // Optional second pass: Verify if candidate is actually the majority element
    let actualCount = 0;
    for (let num of nums) {
        if (num === candidate) actualCount++;
    }

    return actualCount > Math.floor(nums.length / 2) ? candidate : null;
}


/**
 * 
 * [2,2,2,2,3,5]
 * 
 */
