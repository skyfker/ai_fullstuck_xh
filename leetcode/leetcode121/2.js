//动态规划
// 状态转移方程
// 自底向下的递归思想，规律
// dp[i]   全局，第i天的最佳价值   dp[i-1]

var maxProfit = function(prices) {
    if(prices == null || prices.length< 2) {
        return 0
    }
    // 不是考虑当前的最大利润，而是整体利润
    const dp = new Array(prices.length).fill(0)
    let min = prices[0]
    for (let i = 1; i<prices.length;i++) {
        min = Math.min(min,prices[i])
        // 最值问题，局部最优，也是服务于整体最优
        dp[i] = Math.max(dp[i-1],prices[i] - min)
    }
    return dp[prices.length-1]
}