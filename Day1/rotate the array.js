var arr = [1,2,3,4,5,6,7,8,9];
var d = 4;
var out = "";
var out1 = "";
for(var i = 0; i < d; i++) {
    out = out + arr[i] + " ";
}

for(var j = d; j < arr.length; j++) {
    out1 = out1 + arr[j] + " ";
     }
console.log(out1 + out);



//

var arr = [1,2,3,4,5,6,7,8,9];
var d = 4;


reverse(arr, 0, d-1);
reverse(arr, d, n-1);
reverse(arr, 0, n-1);