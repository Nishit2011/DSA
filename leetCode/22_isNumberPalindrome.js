function solve(num) {
    // Negative numbers are not palindromes
    if (num < 0) {
        return false;
    }

    // Numbers ending in 0 cannot be palindromes,
    // except 0 itself
    if (num !== 0 && num % 10 === 0) {
        return false;
    }

    let reversedHalf = 0;

    // Reverse only half of the number
    while (num > reversedHalf) {
        const digit = num % 10;

        reversedHalf = reversedHalf * 10 + digit;

        num = Math.floor(num / 10);
    }

    // Even number of digits
    if (num === reversedHalf) {
        return true;
    }

    // Odd number of digits:
    // Remove the middle digit from reversedHalf
    if (num === Math.floor(reversedHalf / 10)) {
        return true;
    }

    return false;
}

console.log(solve(121));    // true
console.log(solve(1221));   // true
console.log(solve(12321));  // true
console.log(solve(123));    // false
console.log(solve(-121));   // false
console.log(solve(10));     // false
console.log(solve(0));      // true

/**
 * Time: O(log n) — we process roughly half the digits.
Space: O(1) — no additional data structure is used.
 */