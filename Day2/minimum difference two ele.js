// absoulate difference between two minimum value;

function findMinDiff(arr, n) {
 
    arr.sort(function(a, b) {return a - b});
      
    let diff = Number.MAX_VALUE;
    for (let i = 0; i < n - 1; i++)
    if (arr[i + 1] - arr[i] < diff) {
        diff = arr[i + 1] - arr[i];
    }
    return diff;
}