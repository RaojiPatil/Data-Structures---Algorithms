var a = "";
arr = arr.sort(function(a, b){return a - b});

 a = arr[arr.length-2];

return a;







var arr = [1,2,9,4,5];
var count = 1;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] < arr[i+1]) {
    count++
    }
}


if(count < arr.length) {
    console.log("No");
} else {
    console.log("YES");
}


let arr= [ 12, 35, 1, 10, 34, 1 ];
let n = arr.length;
arr.sort();
for (var i = n - 2; i >= 0; i--) {
if (arr[i] != arr[n - 1]) {
console.log(arr[i]);
return;
	}
}



