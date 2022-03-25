var arr = [-7, 1, 5, 2, -4, 3, 0];
var index = 0;
var count = 0;

for(var i = 0; i < arr.length; i++) {    // O(n^2)
    var left = 0;
 for(var j = 0; j < i; j++) {
   left = left + arr[j];
 }
 var right = 0;
for(var j = i+1; j < arr.length; j++) {
    right  = right + arr[j];
}

if(left == right) {
    count = 1;
    index = i;
break;
} 
}

if(count == 1) {
    console.log(index);

} else {
    console.log("no value");
}



// taking 2 array;



//  optimezed approch

var arr = [-7, 1, 5, 2, -4, 3, 0];
var n = arr.length;

var sum = 0;
var leftsum = 0;

for(var i = 0; i< n; i++) {
    sum = sum + arr[i];
    console.log(sum);
}
console.log(sum);
for(var i = 0; i < n; i++) {
    sum = sum - arr[i];
    if(leftsum = sum) {
    console.log(i);
   }
leftsum = leftsum + arr[i];
}

