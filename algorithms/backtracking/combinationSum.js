function combinationSum(arr, target){
    let result = []
    let current = []


    function backtracking(start, remaining){
        if(remaining === 0 ){
            result.push([...current])
            return
        }

        for(let i=start;i<arr,length;i++){

            const item = arr[i]

          
            if(item> remaining){
                break
            }

            current.push(item)

            backtracking(i, remaining-item)

            current.pop()
        }

    }

    backtracking(0, target)

    return result
}