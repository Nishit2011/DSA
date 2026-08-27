function freq(arr,k){

    let map = new Map()

    for(let item of arr){
       if(!map.has(item)){
        map.set(item, 1)
       }else{
        map.set(item, map.get(item)+1)
       }
       
    }

    return Array.from(map.entries())
    .sort((a,b)=>b[1]-a[1]).slice(0,k).map(item=> item[0])
   
}

console.log(freq([1,2,1,1,3,4,5,6,3,6],2))