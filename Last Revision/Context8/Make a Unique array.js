var arr = [2,2,2,3,7];
var out = "";
for(var i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i+1]) {
        out = out + arr[i] + " ";
    }
}
console.log(out);