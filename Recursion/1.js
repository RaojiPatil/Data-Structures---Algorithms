
let n = "aaaacddddcappp";

function f(input)
{
	if(input.length<=1)
			return input;
		if(input[0]==input[1])
			return f(input.substring(1));
		else
			return input[0] +
			f(input.substring(1));
}
console.log(f(n));

//



function ac(x, y) {
	return Math.log(y) / Math.log(x);
}
console.log(ac(3, 9));



function f(n) {
	if (n == 1)
		return 0;
	return Math.log(n) + f(n - 1);
}
console.log(f(n).toFixed(4));


