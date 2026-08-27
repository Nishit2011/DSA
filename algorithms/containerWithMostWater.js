function maxArea(height){

    let maxWater =0
    let left = 0
    let right = height.length - 1

    while(left<right){
       let width = right-left
       let currentHeight = Math.min(height[left], height[right])

        maxWater = Math.max(maxWater, (width*currentHeight))

       if(height[left]<height[right]){
        left++
       }else{
        right--
       }
    }

    return maxWater

}