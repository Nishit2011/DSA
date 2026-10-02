/**
 * Problem: Find the element that appears more than n/2 times.
 * Trick: Boyer-Moore Voting — maintain a candidate and counter. If counter is 0, set new candidate. Increment if same, decrement if different.
 * Time: O(n) | Space: O(1)
 */
function solve(nums){
    let candidate = null
    let count = 0

    for(let num of nums){
        if(count === 0){
            candidate = num
        }
        if(candidate === num){
            count++
        }else{
            count--
        }
    }
    return candidate
}


/**
 * 
 * [2,2,2,2,3,5]
 * 
 */
