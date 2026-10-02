/**
 * Problem: Determine if a string can be segmented into words from a dictionary.
 * Trick: 1D DP — dp[i] = true if s[0..i-1] can be formed. For each i, try all splits j: if dp[j] && s[j..i] is in the word set, mark dp[i] = true.
 * Time: O(n^2) | Space: O(n)
 */
function wordBreak(s, wordDict) {

    const wordSet = new Set(wordDict);

    const dp = new Array(s.length + 1).fill(false);

    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {

        for (let j = 0; j < i; j++) {

            const word = s.substring(j, i);

            if (dp[j] && wordSet.has(word)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}