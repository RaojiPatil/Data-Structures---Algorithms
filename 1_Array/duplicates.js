var arr =[1,2,3,4,5,6,4,2,3,1];
var out = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
  if (arr[i] == arr[j]) {
      out.push(arr[j]);
       }
    }
}console.log(out.join(" "));