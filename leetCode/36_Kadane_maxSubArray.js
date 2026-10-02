/**
 * Problem: Find the maximum sum contiguous subarray.
 * Trick: Kadane's — currentSum = max(arr[i], currentSum + arr[i]). Start fresh if adding prior sum makes things worse.
 * Time: O(n) | Space: O(1)
 */
function solve(arr){
    let currentSum = arr[0]
    let maxSum = arr[0]

    for(let i=1;i<arr.length;i++){
        currentSum = Math.max(arr[i], currentSum+arr[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}