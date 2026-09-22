function subseq(s,t){

    let i =0
    let j=0

    while(i<s.length && j<t.length){
        if(s[i] === t[j]){
            i++
        }
        j++
    }

    return i === s.length
}

/**
 * 
 * ### Is Subsequence — Quick Revision

**Goal:** Check whether `s` appears inside `t` **in the same order**, not necessarily consecutively.

### 4 Steps

1. **Initialize two pointers**

   ```text
   i = 0 → pointer for s
   j = 0 → pointer for t
   ```

2. **Traverse both strings**

   ```text
   while i < s.length && j < t.length
   ```

3. **When characters match**

   ```text
   if s[i] === t[j]
       i++
   ```

   Always move `j++` because we keep scanning `t`.

4. **Check if all of `s` was matched**

   ```text
   return i === s.length
   ```

### 🧠 Remember

> **Scan `t`, look for characters of `s` in order. Match → move both. No match → move only `t`.**

**Pattern:** Two Pointers
**Time:** `O(t.length)`
**Space:** `O(1)`

 */