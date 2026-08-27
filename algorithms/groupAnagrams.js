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