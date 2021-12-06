let arr = [3, 2, 1, 5];
var n = arr.length;
var k = 4;
var count = 0;


 for (var i = 0; i < n; i++) {
   for (var j = i+1; j < n; j++) {

     if (arr[i] + arr[j] == k) {
        count++;
     }
    }
 }

 console.log(count);

 //

 
var arr = [3, 2, 3, 1, 5];
var n = arr.length;
var m = 0;
var count = 0;

for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
        for (var k = j + 1; k < n; k++) {
            if (arr[i] + arr[j] - arr[k] == m) {
                count = count + 1;
            }

        }
    }
}
console.log(count);


