function productOfSelf(arr){
    console.log(arr)
    if(arr.length ===0) return false
    let leftProduct =1
    let answer= new Array(arr.length)
    
    for(let i=0;i<arr.length;i++){
        answer[i] = leftProduct
        leftProduct =leftProduct * arr[i]
    }

    let rightProduct = 1
    for(let i=arr.length-1;i>=0;i--){
        answer[i] *= rightProduct
        rightProduct = arr[i] * rightProduct
    }

    return answer
}

module.exports = productOfSelf


/**
 * Product of Array Except Self

Goal: For every index, calculate the product of all elements except itself.

Example:

[1,2,3,4]
→ [24,12,8,6]
Pattern

Prefix Product + Suffix Product

Steps

Left → Right

answer[i] = product of everything LEFT of i

Update:

leftProduct *= arr[i]

Right → Left

answer[i] *= product of everything RIGHT of i

Update:

rightProduct *= arr[i]
🧠 Remember

First pass: put the LEFT product into answer.
Second pass: multiply by the RIGHT product.

So:

answer[i] = LEFT × RIGHT

Time: O(n)
Space: O(n) for the output array.
 */