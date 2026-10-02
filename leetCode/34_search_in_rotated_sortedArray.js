/**
 * Problem: Search for a target in a rotated sorted array.
 * Trick: Modified binary search — determine which half is sorted, then check if target falls in that sorted half.
 * Time: O(log n) | Space: O(1)
 */
function search(arr,target){
    
    let left=0
    let right = arr.length-1

    while(left<=right){

        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target) return mid

        if(arr[left] <= arr[mid] ){
            if(arr[left] <= target && target<arr[mid]){
                right = mid-1
            }else{
                left = mid+1
            }
        }else{
            if(target<=arr[right] && target> arr[mid] ){
                left=mid+1
            }else{
                right = mid-1
            }
        }
    }

    return -1
}