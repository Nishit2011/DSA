/**
 * Problem: Reverse the order of words in a string (strip extra spaces).
 * Trick: Scan from the end — skip spaces, capture each word using two pointers, push to result, then join.
 * Time: O(n) | Space: O(n)
 */
function solve(str){
    let i = str.length-1
    let result = []

    while(i>0){
        while(i>=0 && str[i] === " "){
            i--
        }
        if(i<0){
            break
        }

        let end = i

        while(i>=0 && str[i] !== " "){
            i--
        }

        result.push(str.substring(i+1, end+1))
    }
    return result.join("")

}