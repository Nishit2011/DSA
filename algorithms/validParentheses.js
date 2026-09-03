function validParentheses(s){
    const stack = []

    for(const char of s){
        if(char==='['){
            stack.push(']')
        }else if(char==='{'){
             stack.push('}')
        }else if(char=='('){
            stack.push(')')
        }else{
            if(stack.pop() !== char){
                return false
            }
        }
           
    }

    return stack.length === 0
}

module.exports = validParentheses

// Here is how you can explain this solution to an interviewer, structured clearly using the **Approach**, **Code Walkthrough**, and **Complexity Analysis** framework.

// ---

// ### 1. Approach & Key Insight

// > "To solve the Valid Parentheses problem, I use a **Stack (LIFO)**.
// > Instead of pushing the opening bracket onto the stack and checking if the current closing bracket matches it, **I push the expected closing bracket** onto the stack whenever I encounter an opening bracket.
// > This trick simplifies the matching logic: when I encounter a closing character, I just need to `pop()` from the stack and verify if the popped character equals the current character. If it doesn't match—or if the stack is empty when we expect a closing bracket—the string is invalid. Finally, if the stack is empty at the end, all brackets were properly matched and closed in order."

// ---

// ### 2. Code Walkthrough

// > "Walking through the code step-by-step:
// > 1. **Initialize the Stack:** I create an empty array `stack = []` to keep track of the expected closing brackets in order.
// > 2. **Iterate Through the String:** I loop through each character `char` in the string `s`:
// > * **Opening Brackets:** If `char` is `'['`, `'{'`, or `'('`, I push its corresponding closing counterpart (`']'`, `'}'`, or `')'`) onto the stack.
// > * **Closing Brackets:** When `char` is a closing bracket, execution hits the `else` block. Here, `stack.pop()` removes and returns the last expected closing bracket. If this popped value does not equal `char`, it means either:
// > * The brackets are mismatched (e.g., expected `']'` but got `')'`).
// > * There are extra closing brackets with no matching open bracket (`stack.pop()` returns `undefined`).
// > In both cases, we immediately return `false`.
// > 
// > 
// > 
// > 
// > 3. **Final Check:** After processing the whole string, I check `stack.length === 0`. If the stack is empty, it returns `true` (all opening brackets were closed). If elements remain, it returns `false` (unclosed opening brackets)."
// > 
// > 

// ---

// ### 3. Complexity Analysis

// * **Time Complexity:** O(n)$, where $n$ is the length of the string `s`. We iterate through the string once, and `push()` and `pop()` operations on the array take $\mathcal{O}(1)$ time.
// * **Space Complexity:** O(n)$ in the worst case (e.g., a string full of opening brackets like `(((((`), because the stack can grow up to size $n$.

// ---

// ### 4. Example Walkthrough (Quick Demo)

// > **Example:** `s = "{()}"`
// > 1. `char = '{'` $\rightarrow$ Push `'}'`. Stack: `['}']`
// > 2. `char = '('` $\rightarrow$ Push `')'`. Stack: `['}', ')']`
// > 3. `char = ')'` $\rightarrow$ Pop `')'`. Matches current `char`. Stack: `['}']`
// > 4. `char = '}'` $\rightarrow$ Pop `'}'`. Matches current `char`. Stack: `[]`
// > 5. Loop ends, `stack.length === 0` $\rightarrow$ Returns `true`.
// > 
// >