var arr =[13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4, 25, 14,23, 14];
var out = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
  if (arr[i] == arr[j]) {
      out.push(arr[j]);
       }
    }
}console.log(out.join(" "));