// 1 brouth fource method;  O(n^2);

var arr = [1,2,3,4,5,6,7];
var key = 10;

function twopairs(arr, key) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
         if(arr[i] + arr[j] == key) {
             return (arr[i] + " " + " "+ arr[j]);
         }
    }
  } 
  return "NO";
}

console.log(twopairs(arr, key))


// 2 two pointer approcha

var arr = [1,2,3,4,5,6,7];
var n = arr.length;
var key = 10;

var low = 0;
var high = n-1;

while(low < high) {
  if(arr[low] + arr[high] == key) {
    console.log(arr[low], arr[high]);
    break;
  } else if(arr[low] + arr[high] < key) {
    low++;
  } else {
    high--;
  }
}