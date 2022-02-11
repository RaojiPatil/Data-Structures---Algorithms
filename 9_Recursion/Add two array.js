var a = [10,20,30];
var b = [2,15,25];

var out = "";
for(var i = 0; i < a.length; i++) {
    out = out + a[i] +" ";
}for(var j = 0; j < b.length; j++) {
    out = out + b[j] + " ";
}
console.log(out)
var arr = out.split(" ");

var n = arr.length;

for (var i = 0; i < n; i++) {
    for (var j = 0; j < (n-i-1); j++) {
        if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr.join(" ").trim());


//


var a = [10,20,30];
var b = [2,15,25];
let n = a.length;
let m = b.length;

function sortedMerge(a, b, res, n, m)
{

	a.sort((a,b) => a-b);
	b.sort((a,b) => a-b);

	let i = 0, j = 0, k = 0;
	while (i < n && j < m) {
		if (a[i] <= b[j]) {
			res[k] = a[i];
			i += 1;
			k += 1;
		} else {
			res[k] = b[j];
			j += 1;
			k += 1;
		}
	}
	while (i < n) { 
		res[k] = a[i];
		i += 1;
		k += 1;
	}
	while (j < m) { 

		res[k] = b[j];
		j += 1;
		k += 1;
	}
}

	let res = new Array(n + m);

	sortedMerge(a, b, res, n, m);
	console.log(res);

