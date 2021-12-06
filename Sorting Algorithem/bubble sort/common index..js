var arr = [1, 2, 3, 4, 5];
var arr2 = [3, 3, 5];
var n = arr.length;
var count = "";
for (var i = 0; i < n; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr[i] == arr2[j]) {
            count = count + arr[i] + " ";
        }
    }
}
console.log(count);
