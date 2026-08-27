//You are given an array where nums[i] tells you the maximum distance you can jump forward from index i. Determine whether you can reach the last index.

//nums = [2, 3, 1, 1, 4]
//answer = true
function canJump(arr){
    let farthest =0;

    for(let i=0;i<arr.length;i++){
        if(i>farthest) return false

        farthest = Math.max(farthest, i+arr[i])
        if(farthest >=arr.length-1) return true
    }
    return true
}