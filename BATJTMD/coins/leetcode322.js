var coinChange = function(coins, amount) {
    const f = []
    f[0] = 0  //用于存储凑成各个金额所需的最少硬币数量。
    for(let i = 1; i <= amount; i++) { 
        f[i] = Infinity;
        for(let j = 0; j<coins.length; j++) {
            if(i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i-coins[j]] + 1)
            }
        }
    }
    if(f[amount] === Infinity){
        return -1
    }
    return f[amount]
};