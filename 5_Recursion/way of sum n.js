// n = 1 2 5;


var n = 5;

function allsum(N) {
  
    if (N === 0)
     return 0;

    if (N === 1) 
        return 1;
    
    return n + allsum(n-1) + allsum(n-2) + allsum(n-5);
}
console.log(allsum(n));


//

var n = 5; 

for (var i = 0; i < n; i++) {

}

var n = 5;

function countWays(n)
{
	var DP = [];
	DP.length = 5;
	DP.fill(0);

	// Base cases
	DP[0] = DP[1] = 1;
	DP[2] = 2;

	for(var i = 0; i <= n; i++)
		DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 5];

	return DP[n];
}


console.log(countWays(n));

//

var str = 21321;
var arr = Array.from(String(str), Number);
