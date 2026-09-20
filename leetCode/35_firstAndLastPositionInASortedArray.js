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