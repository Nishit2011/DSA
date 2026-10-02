/**
 * Problem: Find the length of the longest consecutive number sequence in an unsorted array.
 * Trick: Store all numbers in a Set. Only start counting from a number that has no predecessor (num-1 not in set) to avoid redundant work.
 * Time: O(n) | Space: O(n)
 */
function longestConsecutiveSequence(arr){

    if(arr.length===0) return false

    let set = new Set(arr)
    let longestStreak = 0

    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num
           let  currentStreak = 1
        while(set.has(currentNum+1)){
           currentNum += 1;
                currentStreak += 1;
        }
         longestStreak = Math.max(longestStreak,currentStreak)
        }
       
       
    }
return longestStreak
}
module.exports = longestConsecutiveSequence

// [100,4,200,1,3,2] --> 4
// [0,3,7,2,5,8,4,6,0,1] --> 9