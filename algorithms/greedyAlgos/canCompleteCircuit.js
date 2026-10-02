/**
 * Problem: Given gas stations with gas amounts and costs, find the starting station to complete a circular route.
 * Trick: If tank < 0, reset start = i+1 and tank = 0. If total gas >= total cost, a valid start exists.
 * Time: O(n) | Space: O(1)
 */
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