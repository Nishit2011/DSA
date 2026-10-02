/**
 * Problem: Remove duplicates from a sorted array in-place, return count of unique elements.
 * Trick: Write pointer k starts at 1. Copy nums[i] to nums[k] only if it differs from nums[k-1].
 * Time: O(n) | Space: O(1)
 */
function solve(nums){
    let k=1
    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[k-1]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
}


/**
 * ### Interview explanation

> “Since the array is sorted, all duplicate values will be next to each other. I use two pointers: `i` 
is the **read pointer** that scans through the array, and `k` is the **write pointer** that tells us where to place the next unique element. 
I start `k` at 1 because the first element is always unique. For every element at `i`,
 I compare it with `nums[k-1]`, which is the last unique element that I have kept. 
 If they are different, I copy `nums[i]` to `nums[k]` and increment `k`.
  If they are the same, I skip the element because it's a duplicate. 
  At the end, `k` represents the number of unique elements, and the first `k` positions of the array contain those unique elements.”

**Time Complexity:** The time complexity is **O(n)** because the `for` loop goes through the array exactly once. 
For every element, we perform only constant-time operations such as comparison, assignment, and pointer increment, 
so the total time is proportional to the number of elements in the array.

**Space Complexity:** The auxiliary space complexity is **O(1)** because we modify the input array **in-place** 
and don't create another array or data structure. We only use the variables `i` and `k`, whose memory usage remains 
constant regardless of the input size.

 * 
 * 
 * 
 */