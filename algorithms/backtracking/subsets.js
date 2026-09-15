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