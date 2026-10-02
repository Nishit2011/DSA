/**
 * Problem: Given an array and a target, return two numbers that add up to the target.
 * Trick: Use a HashMap — store each element, check if its complement (target - current) already exists.
 * Time: O(n) | Space: O(n)
 */
function twoSum(arr,target){
    console.log(arr,target)
    if(arr.length === 0){
        return null
    }
    let map = new Map()

    for(let i=0;i<arr.length;i++){
        let complement = target-arr[i]
        if(map.has(complement)){
            return [arr[i],complement]
        }else{
            map.set(arr[i],i)
        }
    }
    return "no pairs"
}

module.exports = twoSum;