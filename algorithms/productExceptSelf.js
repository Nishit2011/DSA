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


//[1,2,3,4]