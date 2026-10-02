/**
 * Problem: Group an array of strings into buckets of anagrams.
 * Trick: Sort each word alphabetically to get a canonical key; group by that key in a Map.
 * Time: O(n * k log k) where k = max word length | Space: O(n*k)
 */
function groupAnagrams(arr){

    let map = new Map()
    for(let char of arr){
        let key = char.split('').sort().join('')

        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(char)

    }

    return Array.from(map.values())
}

console.log(groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]))