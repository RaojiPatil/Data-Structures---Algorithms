var arr = [12,24,65,0,78];
var out = "";
for(var i = 0; i < arr.length; i++) {
var sum = 0;
while (arr[i] != 0) {
  sum = sum + arr[i] % 10;
 arr[i] = parseInt(arr[i] / 10);
 }
 out = out + sum + " ";

}
console.log(out);


  
