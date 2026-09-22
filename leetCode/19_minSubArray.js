function minSubArray(target, nums){
    let left = 0
    let sum = 0
    let minLength = Infinity

    for(let right =0;right<nums.length;right++){

         sum =+ nums[right]

        while(sum>= target){
            minLength = Math.min(minLength, right-left+1)

            sum -= nums[left]
            left++

        }


    }
    return minLength === Infinity ?0 : minLength
}

/**
 * 
 * Minimum Size Subarray Sum
 * 
 * target = 7
nums = [2, 3, 1, 2, 4, 3]

Goal: Find the shortest contiguous subarray with:

sum >= target
Pattern: Sliding Window

Initialize

left = 0
sum = 0
minLength = Infinity

Expand window

right++
sum += nums[right]

When window becomes valid

sum >= target

Record its length

right - left + 1

Shrink from left

sum -= nums[left]
left++

Keep shrinking while valid

while (sum >= target)

Return

minLength === Infinity ? 0 : minLength
🧠 Remember

Expand → Become valid → Record answer → Shrink → Find smaller valid window.

Time: O(n)
Space: O(1)
 * 
 */