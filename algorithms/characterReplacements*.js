function characterReplacement(s, k) {
    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;

    const count = new Map();

    for (let right = 0; right < s.length; right++) {

        // 1. Add the current character to the Map
        const char = s[right];

        count.set(char, (count.get(char) || 0) + 1);

        // 2. Update the highest frequency
        maxFrequency = Math.max(
            maxFrequency,
            count.get(char)
        );

        // 3. Calculate current window length
        const windowLength = right - left + 1;

        // 4. If we need more than k replacements, shrink window
        if (windowLength - maxFrequency > k) {

            const leftChar = s[left];

            count.set(
                leftChar,
                count.get(leftChar) - 1
            );

            left++;
        }

        // 5. Update answer
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

console.log(characterReplacement("AABABBA", 1));
// 4