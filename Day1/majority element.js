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


//

var arr = [2,1,3,1,1,1];
var n = 1+(arr.length/2);

var maxval = 0;
var index = 0;
for(var i = 0; i < arr.length; i++) {
    var count = 1;
    for(var j = i+1; j < arr.length; j++) {
          if(arr[i] == arr[j]) {
              count++;

          }if(maxval < count) {
              maxval = count;
              index = i;
          }
    }
}
console.log(maxval);
console.log(index);





// 2 sorting approch

var arr = [1,2,3,4,2,2];           // O(nlogn);  O(1);
var n = arr.length;

arr.sort(function(a, b) {return a-b});

function majority(arr, n) {
    for(var i = 0; i < n/2; i++) {
        if(arr[i] == arr[i+n/2]) {
      return (arr[i]);
        }
     }
     return ("no mojarity element")
}

console.log(majority(arr, n));



// 3  Hash Map technique / key value pairs;  O(n); O(n);


// 4 Moore-voting algorithems;

var arr = [1,2,3,4,4,4,4];   // O(n)  O(1);
var majindex = 0;


function findmajority(arr) {
    var count = 0;
   for(var i = 0; i < arr.length; i++) {
       if(arr[majindex] == arr[i]) {
           count++;
       } else {
           count--;
       }if(count == 0) {
           majindex = i;
           count = 1;
       }
   }return arr[majindex];
}

console.log(findmajority(arr)); 