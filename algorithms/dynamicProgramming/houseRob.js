/**
 * Problem: Rob houses for maximum money without robbing two adjacent ones.
 * Trick: dp[i] = max(dp[i-1], nums[i] + dp[i-2]) — either skip this house or rob it and add best from two houses back.
 * Time: O(n) | Space: O(n)
 */
function rob(nums){
    if(nums.length===1){
        return nums[0]
    }

    const dp = Array(nums.length)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(
            dp[i-1],
            nums[i] + dp[i-2]
        )
    }

    return dp[nums.length-1]
}

//max money through house i
//base case dp[0], dp[1]
