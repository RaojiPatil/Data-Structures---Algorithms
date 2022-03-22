var arr = [3, 2, 2]                         // O(n^2)
var n = arr.length;


var majoritycount = 0;
var index = 0;
for(var i = 0; i < arr.length; i++) {
    var count = 1;
    for(var j = i+1; j < arr.length; j++) {
       if(arr[i] == arr[j]) {
           count++;
        
       }
       if(count > majoritycount) {
           majoritycount = count;
           index = arr[i];
       }
    }
}
if(majoritycount > n/2) {
    console.log(index)
} else {
    console.log("No mojority element");
}


// 2 sorting approch

var arr = [1,2,3,4,2,2,2,2,2,2];
var n = arr.length;

arr.sort(function(a, b) {return a-b});

