//gets a random integer from 1-6
function d6(){
    return Math.floor(Math.random() *6) +1;
}

//Gets n rolls
function getRolls(n){
    return Array.from({length: n}, ()=> d6());
}

//gets the sum of nums
function sum(nums){
    return nums.reduce((prev, curr) => prev + curr, 0)
}

export {d6, getRolls, sum}