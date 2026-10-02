/**
 * Problem: Find all unique combinations of numbers that sum to a target (elements can be reused).
 * Trick: Backtracking with pruning — break early if element exceeds remaining target. Reuse by passing i (not i+1) into recursion.
 * Time: O(2^n) | Space: O(target / min_element) recursion depth
 */
function combinationSum(arr, target){
    let result = []
    let current = []


    function backtracking(start, remaining){
        if(remaining === 0 ){
            result.push([...current])
            return
        }

        for(let i=start;i<arr,length;i++){

            const item = arr[i]

          
            if(item> remaining){
                break
            }

            current.push(item)

            backtracking(i, remaining-item)

            current.pop()
        }

    }

    backtracking(0, target)

    return result
}