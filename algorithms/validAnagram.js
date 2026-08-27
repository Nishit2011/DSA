function validAnagram(s1,s2){
    if(s1.length !== s2.length) return false
   let map = new Map()

   for(let char of s1){
    map.set(char, (map.get(char) || 0)+1)

   }

   for(let char of s2){
    if(!map.get(char)) return false

    map.set(char, map.get(char)-1)

    if(map.get(char)===0){
        map.delete(char)
    }
   }
    return map.size===0
}


console.log(validAnagram('ram','mka'))