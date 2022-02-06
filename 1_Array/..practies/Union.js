
// Q 16 Union of two arrays 

var arr1 = [85, 25, 1, 32,54, 6];
var arr2 = [85, 2];
var n = arr1.length;
var m = arr2.length;

var out = 0;

for (var i = 0; i < arr1.length; i++) {
  for(var j = 0; j < arr2.length; j++){
       if(arr1[i] == arr2[j]) {
           out++;
       }
  }
}
console.log(n+m-out);






