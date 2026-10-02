/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
/**
 * Problem: Check if a pattern string matches a list of words with the same bijection structure.
 * Trick: Two Maps (word->pattern char and pattern char->word) — verify both mappings are consistent.
 * Time: O(n) | Space: O(n)
 */
var wordPattern = function(pattern, s) {


    let words = s.split(" ")
    if(pattern.length !== words.length) return false
    let mapPS = new Map()
    let mapSP = new Map()
    

    for(let i=0;i<pattern.length;i++){
        let word = words[i]
        let p = pattern[i]

        if(mapPS.has(word) && mapPS.get(word) !== p){
            return false
        }
        if(mapSP.has(p) && mapSP.get(p) !== word){
            return false
        }
        mapPS.set(word, p)
        mapSP.set(p, word)
    }
    return true
};