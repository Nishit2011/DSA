/**
 * Problem: Can you reach the last index given jump lengths at each position?
 * Trick: Track max reachable index — return false if current index exceeds it.
 * Time: O(n) | Space: O(1)
 */
function solve(nums){
    let farthest = 0

    for(let i=0;i<nums.length;i++){
        if(i>farthest) return false

        farthest = Math.max(farthest, i+nums[i])

        if(farthest >= nums.length-1){
            return true
        }
    }
    return true
}