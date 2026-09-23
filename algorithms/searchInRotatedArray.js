function solve(arr, target){
    let left =0
    let right = arr.length-1

    while(left<=right){
        const mid = Math.floor(left+right)/2
        if(arr[mid] === target) return mid

        if(arr[left] <= arr[mid]){

            if(arr[left] <= target && target < arr[mid]){
               right = mid-1
            }else{
                left = mid+1
            }

        }else{
            if(arr[mid]<target && target<arr[right]){
                left = mid + 1
            }else{
                right = mid-1
            }
        }
    }
    return -1
}

/**
 * Quick Revision Summary
Search in Rotated Sorted Array

Goal: Find target in a rotated sorted array.

Example:

[4,5,6,7,0,1,2]
Pattern

Modified Binary Search

Steps
Find mid.

If:

arr[mid] === target

return mid.

Determine which half is sorted:

arr[left] <= arr[mid]

→ left half sorted.

If left is sorted:
Target inside left range → right = mid - 1
Otherwise → left = mid + 1
Otherwise right is sorted:
Target inside right range → left = mid + 1
Otherwise → right = mid - 1
🧠 Remember

Find the sorted half → check if target belongs there → keep that half, otherwise discard it.

Time: O(log n)
Space: O(1)

One particularly important interview phrase to remember:

“Even though the entire array isn't sorted, at every iteration at least one half is guaranteed to be sorted.”
 */