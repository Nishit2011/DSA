function mergeIntervals(intervals){

    intervals.sort((a,b)=> a[0] - b[0])

    const result = []

    for(const current of intervals){
       if(result.length===0 || current[0] > result[result.length-1][1]){
        result.push(current)
       }else{
        result[result.length-1][1] = Math.max(current[1],  result[result.length-1][1])
       }
    }

    return result


}


console.log(mergeIntervals( [[1,3],[2,6],[8,10],[15,18]]))