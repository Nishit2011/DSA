function lengthOfLongestSubstring(str){
    let longest =0
    let left =0

    let set = new Set()
    for(let right=0;right<str.length;right++){
       
        while(set.has(str[right])){
            set.delete(str[left])
            left++
        }

        set.add(str[right])
        longest = Math.max(longest, right-left+1)
    }

    return longest

}

console.log(longestSubstringLength("abcabcbb"));  // Outputs 3
console.log(longestSubstringLength("bbbbb"));  // Outputs 1
console.log(longestSubstringLength("pwwkew"));  // Outputs 3

module.exports = lengthOfLongestSubstring