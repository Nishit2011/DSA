/**
 * Problem: Return the index of the first occurrence of needle in haystack.
 * Trick: Slide a window of size needle.length across haystack, comparing character by character.
 * Time: O(n*m) | Space: O(1)
 */
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