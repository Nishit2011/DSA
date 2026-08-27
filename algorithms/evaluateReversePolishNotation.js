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
        }else{
            stack.push(Number(s))
        }
    }
}

return stack.pop()
   
}