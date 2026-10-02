/**
 * Problem: Rotate an array to the right by k steps in-place.
 * Trick: Three-reversal technique — reverse all → reverse first k → reverse remaining k to n-1.
 * Time: O(n) | Space: O(1)
 */
function rotate(nums, k){
    let n = nums.length

    k = k%n

    reverse(nums,0,n-1)
    reverse(nums,0, k-1)
    reverse(nums,k,n-1)

}

function reverse(nums, left, right){
    while(left<right){
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
}

/**
 * 
 * I use the three-reversal technique. First, I normalize k using k % n. 
 * Then I reverse the entire array, which brings the last k elements to the front but in reverse order. 
 * I reverse the first k elements to restore their order, and finally reverse the remaining elements. 
 * This gives the array rotated by k positions.
 */