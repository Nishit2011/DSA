/**
 * Problem: Find the minimum element in a rotated sorted array.
 * Trick: Binary search — if arr[mid] > arr[right], the minimum is in the right half; otherwise narrow right to mid.
 * Time: O(log n) | Space: O(1)
 */
function findMin(arr){

    let left =0
    let right = arr.length-1

    while(left<right){
        const mid = Math.floor(left+right)/2

        if(arr[mid]> arr[right]){
            left=mid+1

        }else{
            right = mid
        }
    }
    return arr[left]
}