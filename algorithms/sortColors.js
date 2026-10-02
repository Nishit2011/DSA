/**
 * Problem: Sort an array of 0s, 1s, and 2s in-place (Dutch National Flag).
 * Trick: Three pointers (low, mid, high). Swap 0s left, 2s right, 1s stay. Don't advance mid after swapping a 2.
 * Time: O(n) | Space: O(1)
 */
function sortColors(nums){
    let low=0
    let mid =0 
    let high = nums.length-1

        while(mid<=high){
            if(nums[mid] === 0){
                [nums[mid], nums[low]] = [nums[low], nums[mid]]
                low++
                mid++
            }else if(nums[mid] === 1){
                mid++
            }else{
                [nums[mid], nums[high]] = [nums[high], nums[mid]]
                high--
            }
        }

        return nums
}


/**
 * Quick Revision Summary
Sort Colors — Dutch National Flag

Goal: Sort an array containing only 0, 1, and 2.

Three pointers
low  → position for 0
mid  → current element to inspect
high → position for 2
Logic

See 0

swap(mid, low)
low++
mid++

See 1

mid++

See 2

swap(mid, high)
high--

Don't increment mid, because the swapped element is still unknown.

Stop when:

mid > high
🧠 Remember

0 → send left
1 → leave in middle
2 → send right

Pattern: Three Pointers / Dutch National Flag
Time: O(n)
Space: O(1)
 */