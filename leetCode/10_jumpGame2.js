function solve(nums){
    let currentEnd =0 //The furthest index I can reach using my current number of jumps.
    let jumps = 0 //Number of jumps we have committed to.
    let farthest = 0 //While exploring the current range, what is the furthest index I could reach with one additional jump?
    for(let i=0;i<nums.length;i++){
        farthest = Math.max(farthest, i+nums[i])

        if(i===currentEnd){
            jumps++
            currentEnd = farthest
        }
    }
    return jumps
}