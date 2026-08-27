//const gas = [1, 2, 3, 4, 5];
//const cost = [3, 4, 5, 1, 2];

canCompleteCircuit(gas, cost); // 3


function canCompleteCircuit(gas, cost){
    let total =0
    let cost =0
    let start =0
    for(let i=0;i<gas.length;i++){
        const difference = gas[i] - cost[i]
        total += difference
        tank += difference

        if(tank<0){
            start = i+1
            tank =0
        }

        return total >=0 ? start : 1
    }
}