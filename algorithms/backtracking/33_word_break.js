function wordBreak(s, wordDict){
    const wordSet = new Set(wordDict)

    const dp = new Array(s.length+1).fill(false)

    dp[0] = true

    for(let i=0;i<= s.length;i++){
        for(let j=0;j<i;j++){

            const word = s.substring(i,j)
            if(dp[j] && wordSet.has(word)){
                dp[i] = true
                break
            }
        }
    }

    return dp[s.length]
}