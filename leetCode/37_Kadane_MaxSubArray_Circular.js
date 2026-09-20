function solve(nums){
    let currentMax = nums[0]
    let maxSum = nums[0]

    let minSum= nums[0]
    let totalSum=nums[0]
    let currentMin = nums[0]


    for(let i=0;i<nums.length;i++){
        currentMax = Math.max(nums[i], nums[i]+currentMax)
        maxSum = Math.max(maxSum, currentMax)


        currentMin = Math.min(nums[i], nums[i]+currentMin)
        minSum = Math.min(minSum, currentMin)

        totalSum += nums[i]

    }

    if(maxSum<0){
        return maxSum
    }

    return Math.max(maxSum, totalSum-minSum)

}