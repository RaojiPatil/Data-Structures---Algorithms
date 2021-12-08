
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

