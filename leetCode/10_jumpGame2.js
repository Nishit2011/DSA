function solve(nums){
    let currentEnd =0
    let jumps = 0
    let farthest = 0

    for(let i=0;i<nums.length;i++){
        farthest = Math.max(farthest, i+nums[i])

        if(i===currentEnd){
            jumps++
            currentEnd = farthest
        }
    }
    return jumps
}