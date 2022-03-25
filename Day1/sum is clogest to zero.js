var arr = [1, 2, 6, 9, -5, -2];
var sum = 0;
var min_low = 0;
var min_high = 1;
var minimumsum = arr[0] + arr[1];


for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
        sum = arr[i] + arr[j];

        if(Math.abs(minimumsum) > Math.abs(sum)) {
            minimumsum = sum;
            min_low = i;
            min_high = j;
        } 
    }
}
console.log(arr[min_low], arr[min_high]);




// sorting + 2 pointer     for sorting is O(nlogn)  and 2 pointer is O(n);

var arr = [1, 2,1, 6, 9, -5, -2];   // O(nlogn);
var n = arr.length;
var sum;
var min_sum = +Infinity;
var low = 0; 
var high = n-1;
var mid;

var min_i, min_j;

if(n < 2) {
    console.log("Invalid input");
}

while(low < high) {
    sum = arr[low] + arr[high];
    if(Math.abs(sum) < Math.abs(min_sum)) {
        min_sum = sum;
        min_i = low;
        min_j = high;
    }
    if(sum < 0) {
        low++;
    } else {
        high--;
    }
}
console.log(arr[min_i], arr[min_j]);