function solve(num){

    if(x<0) return false

    if(num!==0 && num%10 === 0){
        return false
    }

    let reversedHalf = 0

    while(x>reversedHalf){
        const digit = x % 10
        reversedHalf = reversedHalf * 10 + digit

        x = Math.floor(x/10)
    }

    return x===reversedHalf || 
    x=== Math.floor(reversedHalf/10)

}