// how to find subarray in array
// ans:- subarray means sum of first n natural numbers  n(n+1)/2;


// 1 brouth fource   O(n^3);





// Kadanes Algorithem 

var arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function subarray_sum(arr) {
    var sum = -Infinity;
    var current_sum = 0;

    for(var i = 0; i < arr.length; i++) {
        current_sum = current_sum + arr[i];

        if(current_sum > sum) {
            sum = current_sum;
        }if(current_sum < 0) {
            current_sum = 0;
        }
    } return sum;
}

console.log(subarray_sum(arr));