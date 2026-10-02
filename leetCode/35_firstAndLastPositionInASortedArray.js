/**
 * Problem: Find the first and last positions of a target in a sorted array.
 * Trick: Two binary searches — one biased left (record and narrow right) and one biased right (record and narrow left).
 * Time: O(log n) | Space: O(1)
 */
function search(arr, target){
    

    function firstOcc(){
        let left =0
        let right = arr.length-1
        let result = -1

        while(left<=right){
            let mid= Math.floor((left+right)/2)

            if(arr[mid] === target){
                result = mid
                right = mid-1
            }else if(target>arr[mid]){
                left =mid+1
            }else if(target<arr[mid]){
                right = mid-1
            }
        }
        return result
    }
    function lastOcc(){
 let left =0
        let right = arr.length-1
        let result = -1

        while(left<=right){
            let mid= Math.floor((left+right)/2)

            if(arr[mid] === target){
                result = mid
                left = mid+1
            }else if(target>arr[mid]){
                left =mid+1
            }else if(target<arr[mid]){
                right = mid-1
            }
        }
        return result

    }


    return [firstOcc(), lastOcc()]
}