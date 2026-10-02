/**
 * Problem: Convert an integer to a Roman numeral string.
 * Trick: Greedy — iterate through values in descending order (including subtractive cases like 900, 400); subtract and append symbol while num >= value.
 * Time: O(1) (bounded by max Roman value 3999) | Space: O(1)
 */
function integerToRoman(num){
    const values = [
         1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4 , 1
    ]
       
    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ]

    let result = ""
    
    for(let i=0;i<values.length;i++){
        if(num>=values[i]){
            result +=  symbols[i]
            num -= values[i]
        }
    }

    return result
}