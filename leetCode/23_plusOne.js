/**
 * Problem: Increment a number represented as a digit array by one.
 * Trick: Traverse from the right — if digit < 9, increment and return; otherwise set to 0 and carry. If all 9s, prepend 1.
 * Time: O(n) | Space: O(1)
 */
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }

        digits[i] = 0
    }

    digits.unshift(1)

    return digits
}