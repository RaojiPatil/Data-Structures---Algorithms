// 1 for loop and search all 1 and 0 and store in seprate arr;

var arr = [1, 1, 0, 1, 0, 0];
var out = "";
var out1 = "";

for(var i = 0; i < arr.length; i++) {
    if(arr[i] == "0") {
        out = out + arr[i] + " ";
    } else {
        out1 = out1 + arr[i] + " ";
    }
}

console.log(out + out1);



// 2 two pointer approch   TC = O(n);  SC= O(1);

var arr = [1, 1, 0, 1, 0, 0];
var n = arr.length;

var left = 0;
var right = arr.length-1;

while(left < right) {
    while(arr[left] == 0 && left < right) {
        left++;
    }while(arr[right] == 1 && left < right) {
        right--;
    }
    if(left < right) {
        arr[left] =0;
        arr[right] =1;
        left++;
        right--;
    }
}
console.log(arr);