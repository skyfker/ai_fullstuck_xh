var maxProfit = function(prices) {
    let min = prices[0]; //贪心的追求最小值
    let profit = 0; //利润
    let len = prices.length
    for(let i = 1;i<len;i++) {
        if (prices[i] > prices[i-1]) {
            //更新利润
            profit = Math.max(profit,prices[i] - min)
        } else{
            //更新min
            min = Math.min(min,prices[i])
        }
    }
    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));