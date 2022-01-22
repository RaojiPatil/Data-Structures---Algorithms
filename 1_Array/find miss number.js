// 1) Sum of the series: Formula: n (n+1)/2( but only work for one missing number)
//  Use BitSet, if an array has more than one missing element.


let arr = [ 1, 2, 4, 5, 6 ];
let n = arr.length;
var miss = getMissingNo(arr, n);
function getMissingNo(arr, n) {

		let total = Math.floor((n + 1) * (n + 2) / 2);
		for (let i = 0; i < n; i++)
			total = total - arr[i];
		return total;
}

console.log(miss);

