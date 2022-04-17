var arr = [2,3,4,5,6,8,12,15,31,45,78];
var key = 45;

function search(arr, key) {
for(var i = 0; i < arr.length; i++) {
    if(arr[i] == key) {
        return i;
    }
  }
}
console.log(search(arr, key));



var arr = [2,3,4,5,6,8,12,15,31,45,78];
var key = 45;

function binarysearch(arr, key) {
    var left = 0;
    var right = arr.length;
    var mid;

    while(left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if(arr[mid]== key) {
            return arr[mid];
        } if(arr[mid] < key) {
            left = mid+1;

        } else {
            right = mid-1;
        }
    }
    // return -1;
    
}

console.log(binarysearch(arr, key))



// binary search



var arr = [2,3,4,5,6,8,12,15,31,45,78];
var key = 45;

function binarysearch(arr, key) {
    var left = 0;
    var right = arr.length;
    var mid;

    while(left <= right) {
        mid = left + Math.floor((right - left) / 2);

        if(arr[mid] == key) {
            return arr[mid];
        } if(arr[mid] < key) {
            left = mid+1;
        } else {
            right = mid - 1;
        }
    } return -1;
}

console.log(binarysearch(arr, key));