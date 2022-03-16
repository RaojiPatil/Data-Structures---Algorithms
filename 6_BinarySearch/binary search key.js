// Binary search

var arr = [1,2,3,4,5,6,7,9];
var target = 8;

// iterative method
function search(arr, target) {
for(var i = 0; i < arr.length; i++) {         // TC = O(n); SC = O(1);
    if(arr[i] == target) {
        return i
    }
  }return -1
}
console.log(search(arr, target));


// Binary search 

var arr = [1,2,3,4,5,6,7,8,9];
var target = 8;


function binarysearch(arr, target) {     // O(logn);
    var low = 0;
    var high = arr.length;
    var mid;
    while(low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if(arr[mid] == target) {
            return arr[mid];
        }if(arr[mid] > target) {
            high = mid-1;
        } else {
            low = mid+1;
        }

    }
}

console.log(binarysearch(arr, target))


// recursely binary search

var arr = [1,2,3,4,5,6,7,8,9];
var target = 8;


function binarySearch(arr, target) {
    var low = 0;
    var high = arr.length;
    var mid;
if(low<=high) {

    mid = low + Math.floor((high - low) / 2);

if(arr[mid]==target)
return mid
if(target>arr[mid])//R.H.S
binarySearch(arr,mid+1,high,target)
else //L.H.S
binarySearch(arr,low,mid-1,target)
}
return -1
}
console.log(binarySearch(arr, target));