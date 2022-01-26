

// Q 17 rotate last value

var arr = [3,5,2,7,9];
var out = arr[arr.length-1];
var out1 = "";
for(var i = 0; i < arr.length-1; i++){
    out1 = out1 + arr[i] + " ";
}
console.log(out + " " + out1);



var arr = [1,2,3,4,5];
var n = arr.length;

function rotate(arr, n) {
    var i = 0;
    var j = n-1;

    while(i != j) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i = i+1;
    }
 
}
rotate(arr, n);
console.log(arr);

