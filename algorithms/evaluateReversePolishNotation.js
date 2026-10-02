/**
 * Problem: Evaluate a postfix (Reverse Polish Notation) expression.
 * Trick: Use a stack — push numbers; on operator, pop two operands, compute, and push the result.
 * Time: O(n) | Space: O(n)
 */
function evaluateRPN(str){

let stack =[]

for(let s of str){
    if(s==='+' || s === '-' || s==='*' || s=== '/'){
        let b = stack.pop()
        let a = stack.pop()

        if(s==='+') {stack.push(a+b)}
        else if(s==='-') {stack.push(a-b)}
        else if(s==='*') {stack.push(a*b)}
        else if(s==='/'){
                stack.push(Math.trunc(a/b))
        }
    }else{
            stack.push(Number(s))
        }
}

return stack.pop()
   
}

console.log(evaluateRPN["2","1","+","3","*"])