/**
 * Problem: Return all possible subsets of an array.
 * Trick: Backtracking — snapshot current state into results, then try adding each remaining element, recurse, then pop (undo).
 * Time: O(n * 2^n) | Space: O(n * 2^n)
 */
function subsets(nums){
    let result = []
    let current = []

    function backtracking(index){
        result.push([...current])
        for(let i=index;i<nums.length;i++){
            current.push(nums[i])

            backtracking(i+1)

            current.pop()
        }
    }
    backtracking(0)
    return result
}