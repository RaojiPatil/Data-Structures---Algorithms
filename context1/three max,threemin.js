var arr = [1, 2, 3, 4, 2, 1, 6, 5];

arr.sort(function(a, b) {return a - b});
var out = "";
for(var i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i+1]) {
        out = out + arr[i]+ "";
    }
}
// console.log(out);

var min = "";
var max = "";

if(out.length >= 6) {
for(var i = 0; i < 3 ; i++) {
    min = min + out[i] + " ";
}
for(var i = out.length-3; i < out.length; i++) {
    max = max + out[i] + " ";
}
console.log(min);
console.log(max);
} else {
    console.log("Not Possible");
console.log("Not Possible");
}
