var arr = [1, 2, 3, 4, 4, 4,4,4,4, 6, 7];
var key = 4;

function lastoccurence(arr, key) {
    var left = 0;
    var right = arr.length;
    var mid;

    while(left <= right) {
        mid = left + Math.floor((right - left) /2);
       var res = -1;
        if(arr[mid] == key) {
            res = mid;
            left = mid + 1;

        } if(arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid-1;
        }
    } return res;
}

console.log(lastoccurence(arr, key));