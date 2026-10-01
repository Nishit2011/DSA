function hIndex(citations){
    let result =0

    for(let h=0;h<citations.length;h++){
        let count =0

        for(let citation of citations){

            if(citation>=h){
                count++
            }

            if(count >= h){
                result =h
            }
        }
    }
    return result
}