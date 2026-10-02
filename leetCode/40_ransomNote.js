/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/**
 * Problem: Check if a ransom note can be constructed from letters in a magazine.
 * Trick: Count character frequencies of magazine in a Map; decrement for each char in ransomNote; return false if any count hits 0.
 * Time: O(m+n) | Space: O(1) (26 chars)
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()

    for(let item of magazine){
        if(!map.has(item)){
            map.set(item,1)
        }else{
            map.set(item, map.get(item)+1)
        }
    }

    for(let item of ransomNote){
        if(!map.get(item)) return false
        map.set(item, map.get(item)-1)
        if(map.get(item) === 0){
            map.delete(item)
        }
    }

    return true
    
};