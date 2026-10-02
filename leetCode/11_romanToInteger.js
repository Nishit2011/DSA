/**
 * Problem: Convert a Roman numeral string to an integer.
 * Trick: If current symbol's value is less than the next symbol's value, subtract it; otherwise add it.
 * Time: O(n) | Space: O(1)
 */
function rolmanToInteger(s){
    const values = {
        I :1,
        V: 5,
        X: 10,
        L: 50,
        C:100,
        D:500,
        M:1000
    }

    let total = 0

    for(let i=0;i<s.length;i++){
        let current = values[s[i]]
        let next = values[s[i+1]]

        if(current<next){
            total -= current
        }else{
            total += current 
        }
    }

    return total
}