/**
 * Problem: Find the index of a target in a sorted array.
 * Trick: Classic binary search — shrink search space by halving based on midpoint comparison.
 * Time: O(log n) | Space: O(1)
 */
function binarySearch(arr,target){
    let left=0
    let right = arr.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target) return mid
        if(arr[mid]<target){
            left = mid+1
        }else if(arr[mid] > target){
            right = mid-1
        }
    }
    return -1
}