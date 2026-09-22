function mergeSort(arr){

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    let mergeLeft = mergeSort(left)
    let mergeRight = mergeSort(right)


    return combine(mergeLeft, mergeRight)
}

function combine(l,r){
    let i=0
    let j =0
    let result = []
    while(i<l.length && j<r.length){
        if(l[i] < r[j]){
            result.push(l[i])
            i++
        }else if(r[i] < l[j]){
            result.push(r[j])
            j++
        }

    }

    while(i<l.length){
        result.push(l[i])
        i++
    }
    while(j<r.length){
        result.push(r[j])
        j++
    }

    return result
}