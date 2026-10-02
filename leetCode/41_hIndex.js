/**
 * Problem: Find the H-Index — the largest h such that h papers have at least h citations.
 * Trick: For every candidate h (0 to n), count papers with citations >= h; if count >= h, update result.
 * Time: O(n^2) | Space: O(1)
 */
function hIndex(citations){
    let result =0

    for(let h=0;h<citations.length;h++){
        let count =0

        for(let citation of citations){

            if(citation>=h){
                count++
            }

            if(count >= h){
                result =h
            }
        }
    }
    return result
}