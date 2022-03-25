// 1 Brouth fource method  O(n^3);

var arr = [1,2,4,5,6,7,3,9];
var key = 6;


function threepointer(arr, key) {
for(var i = 0; i < arr.length-2; i++) {
    for(var j = i+1; j < arr.length-1; j++) {
        for(var k = j+1; k < arr.length; k++) {
            if(arr[i] + arr[j] + arr[k] == key) {
                
                return [arr[i], arr[j], arr[k]];
            }
        }
    }
}
   return "NO";
}
console.log(threepointer(arr, key));


// 2 sorting + 2 pointer


var arr = [1,2,4,5,6,7,3,9];
var key = 7;
var n = arr.length;
arr.sort(function (a, b) {return a- b});

function threepairs(arr, key, n) {
for(var i = 0; i < arr.length-2; i++) {
    var low = i+1;
    var high = n-1;
    while(low < high) {
        if(arr[i] + arr[low] + arr[high] == key) {
            console.log(arr[i], arr[low], arr[high])
            return (arr[i] + " " + arr[low]+ " " + arr[high]);
         
        } else if(arr[i] + arr[low] + arr[high] < key) {
            low++;
        } else {
            high--;
        }
    }
}
}
threepairs(arr, key, n);
