// 1 brouth fource method;  O(n^2);

var arr = [1,2,3,4,5,6,7];
var key = 10;

function twopairs(arr, key) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
         if(arr[i] + arr[j] == key) {
             return "YES";
         }
    }
  } 
  return "NO";
}

console.log(twopairs(arr, key))


