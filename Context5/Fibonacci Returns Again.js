//  dp
var n = 5;

function  f(n) {
    let dp = [];

    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
console.log(f(n));



// recursion

function f(n) {
    if(n == 0) 
    return 0;
    if(n == 1)
    return 1;
    return f(n-1) + f(n-2);
}
console.log(f(5));