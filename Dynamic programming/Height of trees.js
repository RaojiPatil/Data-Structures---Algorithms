// var arr = [15, 15, 3, 10, 12, 12, 13, 5, 5, 7]
// var n = arr.length;
// var max = arr[0];
// var count = 1;


// for (var i = 0; i < n; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//         count++;
//     }
// }console.log(max);
// console.log(count);




var arr = [15, 15, 3, 10, 12, 12, 13, 5, 5, 7]
var n = arr.length;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
    
    }
}




let arr= [15, 15, 3, 10, 12, 12, 13, 5, 5, 7]
let n = arr.length;


function  heigest(arr,n) {

    if (n == 1)
        return 1;
    let res =1;
    let max = 1;

    for (let i = 1; i < n; i++) {
        res = heigest(arr, i);
        if (arr[i-1] < arr[n-1] && res + 1 > max)
            max = res + 1;
    }
    if (max_ref < max)
        max_ref = max;

    return max;
}
 
function  heigesttree(arr,n) {

    max_ref = 1;
    heigest( arr, n);
     
    return max_ref;
}
console.log(heigesttree(arr, n));