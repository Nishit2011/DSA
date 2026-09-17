function lengthOfCommonPrefix(strs){
    if(strs.length === 0 ) return false

    const first = strs[0]

    for(let i=0;i<first.length;i++){
        const char = first[i]

        for(let j=1;j< strs.length;j++){
            if(i>= strs[j].length || strs[j][i] !== char){
                return strs.substring(0,i)
            }
        }
    }

    return first

}