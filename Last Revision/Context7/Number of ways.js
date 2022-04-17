
var n = 25;

function countWays(n)
{
    var DP = [];
    DP.length = 10;
    DP.fill(0);
 
    // Base cases
    DP[0] = DP[1] = 1;
    DP[3] = 3;
    DP[4] = 4;
 
    // Iterate for all values from 4 to n
    for(var i = 4; i <= n; i++)
        DP[i] = DP[i - 1] + DP[i - 3] +
                DP[i - 4];
 
    return DP[n];
}
console.log(countWays(n));