/**
 * Problem: Check if an array contains any duplicate values.
 * Trick: Insert into a Map; if the element already exists, return true immediately.
 * Time: O(n) | Space: O(n)
 */
function containsDups(arr){
    let map = new Map()

    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],i)
        }else{
            return "has dups"
        }
    }
    return "no dups"
}


console.log(containsDups([1,2,3,4,5,1]))