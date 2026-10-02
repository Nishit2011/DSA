/**
 * Problem: Remove all occurrences of val from an array in-place, return new length.
 * Trick: Write pointer k — only copy elements that don't equal val.
 * Time: O(n) | Space: O(1)
 */
var removeElement = function(nums, val) {
    let k =0

    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }

    }
   return k
};


