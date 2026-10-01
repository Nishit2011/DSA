/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
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