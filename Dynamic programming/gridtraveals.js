function gridtravel(m, n, memo = {}) {
    const key = m + "," + n;
    if (key in memo) return memo[key];

    if (m === 0 || n === 0)
        return 0;
    if (m === 1 || n === 1)
        return 1;
    memo[key] = gridtravel(m - 1, n, memo) + gridtravel(m, n - 1, memo);
    return memo[key];
}

console.log(gridtravel(4, 5))
console.log(gridtravel(1, 7))





var dp = [N + 1];
dp[N] = INT_MAX;
dp[N - 1] = 0;

for (var i = N - 2; i >= 0; i--) {
    dp[i] = min(abs(cost[i] - cost[i + 1]) + dp[i + 1], abs(cost[i] - cost[i + 2]) + dp[i + 2]);
}

return dp[0];
