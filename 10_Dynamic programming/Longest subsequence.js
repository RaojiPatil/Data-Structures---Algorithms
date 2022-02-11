var s1 = "AEDFHR";
var s2 = "ABCDGH";
var X=s1;
var Y=s2;
var m = X.length;
var n = Y.length; 

function lcs( X, Y , m , n )
{
	if (m == 0 || n == 0)
	return 0;
	if (X[m-1] == Y[n-1])
	return 1 + lcs(X, Y, m-1, n-1);
	else
	return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
}

function max(a , b)
{
	return (a > b)? a : b;
}
console.log(lcs( X, Y, m, n ) );







