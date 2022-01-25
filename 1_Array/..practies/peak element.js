
// Q 9 find peak element;
// Binary search

var arr = [6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 1,3];
var n = arr.length;

var low = 0;
var high = n-1;
var mid = low + (high-low)/2;

for (var i = low; i < high; i++) {
    if(arr[mid] > arr[mid+1]) {
        high = mid;
    } else {
        low = mid + 1;
    }
}
console.log(high);

// itertive 

var arr = [2,5,1,7,6];
var n = arr.length;
var index= 0;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) {
        index = i;
    }
}
console.log(index);

//
var arr = [1, 3, 20, 4, 1, 0];
 var n = arr.length;

function findPeak(arr, n) {

if (n == 1) 
return 0;

if (arr[0] >= arr[1]) 
return 0;

if (arr[n - 1] >= arr[n - 2])
return n - 1;

for (var i = 1; i < n - 1; i++)  {
if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
return i;      
  }    
}
console.log(findPeak(arr, n));
