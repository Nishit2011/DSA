/**
 * Problem: Check if two strings are isomorphic (each char in s maps consistently to a char in t and vice versa).
 * Trick: Two bidirectional Maps (s->t and t->s) — verify consistency of both mappings on each character.
 * Time: O(n) | Space: O(1) (bounded alphabet)
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }

        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
};