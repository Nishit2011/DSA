function merge(nums1, m, nums2,n){
    let i = m-1
    let j= n-1
    let k = m+n-1

   while(j>=0){
    if(i>=0 && nums1[i]> nums2[j]){
        nums1[k] = nums1[i]
        i--
    }else{
        nums1[k] = nums2[j]
        j--
    }
    k--
   }

   
}


/**
 * 
 * Your interview explanation could be

“Since nums1 has unused space at the end, I'll merge the arrays in-place from right to left. 
I'll maintain three pointers: i at the end of the valid portion of nums1, j at the end of nums2, 
and k at the last position of nums1.

I compare the elements at i and j. Whichever is larger goes into position k. 
Then I move the pointer of the array from which I selected the element, and 
I always move k backward. I continue until all elements from nums2 have been placed.”
 * 
 * 
 * 
 * 
 * **Time Complexity:** The time complexity is **O(m + n)** because we process the elements of both arrays using the
 *  three pointers `i`, `j`, and `k`. In each iteration, we move either `i` or `j`, and `k` is always decremented.
 *  Therefore, each element is considered at most once, giving us **O(m + n)** time.

**Space Complexity:** The space complexity is **O(1)** because we are modifying `nums1` **in-place** rather than creating
 a separate array. We only use three pointer variables — `i`, `j`, and `k` — whose memory usage
  remains constant regardless of the size of the input arrays. Therefore, the auxiliary space is **O(1)**.

 */