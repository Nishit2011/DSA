function solve(str){
    let i = str.length-1
    let result = []

    while(i>0){
        while(i>=0 && str[i] === " "){
            i--
        }
        if(i<0){
            break
        }

        let end = i

        while(i>=0 && str[i] !== " "){
            i--
        }

        result.push(str.substring(i+1, end+1))
    }
    return result

}