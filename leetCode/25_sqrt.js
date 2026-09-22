function solve(x){
    let left = 0
    let right = x
    let answer =0


    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(mid*mid <= x){
            answer = mid
            left = mid +1
        }else{
            right = mid -1
        }

    }

    return answer
}