/**
 * Problem: Count trailing zeros in n! (each zero requires one factor of 10 = one pair of 2x5; 5 is the limiting factor).
 * Trick: Count factors of 5 — repeatedly divide n by 5 and sum the quotients.
 * Time: O(log n) | Space: O(1)
 */
function solve(n){
    let count = 0
    while(n>=5){
        n = Math.floor(n/5)
        count += n
    }
    return count
}