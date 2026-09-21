function solve(nums){
    let k=0
    for(let i=0;i<nums.length;i++){
        if(k<2 || nums[i] !== nums[k-2]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
}


/**
 * 
 * ### Interview explanation

> “Since the array is sorted, duplicate values are next to each other. Here, we are allowed to keep **at most 
two copies** of each number. I use two pointers: `i` scans through the array, and `k` tells me where to place the next valid element. 
For the first two elements, I always keep them because each number is allowed twice. 
After that, I compare `nums[i]` with `nums[k-2]`. If they are different, it means the current number has not already been kept twice, 
so I place it at `nums[k]` and increment `k`. If they are the same, it means we already have two copies, 
so I skip the current element. Finally, `k` gives us the length of the valid portion of the array.”

**Time Complexity:** The time complexity is **O(n)** because we traverse the array only once using the `i` pointer. 
For each element, we perform only constant-time operations such as comparison and assignment.

**Space Complexity:** The space complexity is **O(1)** because we modify the input array **in-place** and 
don't create any additional data structure. We only use the pointers `i` and `k`, so the extra space remains constant.

 * 
 */