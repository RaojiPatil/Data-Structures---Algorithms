
var MAX = 1000;
function maxSubsequenceSubstring(x, y, n, m)
{
    var dp = Array.from(Array(MAX), ()=> Array(MAX));

    // Initialize the dp[][] to 0.
    for (var i = 0; i <= m; i++)
        for (var j = 0; j <= n; j++)
            dp[i][j] = 0;

    // Calculating value for each element.
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {

            // If alphabet of string X and Y are
            // equal make dp[i][j] = 1 + dp[i-1][j-1]
            if (x[j - 1] == y[i - 1])
                dp[i][j] = 1 + dp[i - 1][j - 1];

            // Else copy the previous value in the
            // row i.e dp[i-1][j-1]
            else
                dp[i][j] = dp[i][j - 1];
        }
    }

    // Finding the maximum length.
    var ans = 0;
    for (var i = 1; i <= m; i++)
        ans = Math.max(ans, dp[i][n]);

    return ans;
}

// Driver Program
var x = "AEDFHR";
var y = "ABCDGH";
var n = x.length, m = y.length;
console.log( maxSubsequenceSubstring(x, y, n, m));



var arr1 = [2,4,3];
var arr2 = [5,6,4];

arr1.reverse();
arr2.reverse();

const arr3 = Number(arr1.join(''));
const arr4 = Number(arr2.join(''));


console.log(arr3+arr4);

var arr1 = [2,4,3];
arr1.toString();
console.log(arr1);