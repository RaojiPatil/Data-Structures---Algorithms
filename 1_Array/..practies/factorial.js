// Q 1


var n = 5;
var out = 1;

for (var i = 1; i <= n; i++) {
     out = out * i;
}
console.log(out);



// resursion  


function f(n) {
    if(n == 0)
    return 0;
    if(n == 1)
    return 1;
    return n * f(n-1);
}

console.log(f(5));

// DP

function f(n) {
    var DP = [];
    DP[0] = DP[1] = DP[2] = 1;
    DP[3] = 2;
    for(var i = 4; i <= n; i++)
        DP[i] = DP[i - 1] + DP[i - 3] +  DP[i - 4];

    return DP[n];
}