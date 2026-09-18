function solve(haystack, needle){
    for(let i=0;i<haystack.length-needle.length;i++){
        let j = 0

        while(j<needle.length && needle[j] === haystack[i+j]){
            j++
        }
        if(j===needle.length){
            return i
        }

    }
    return -1
}