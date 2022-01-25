

//Q 10 Find min and max element in array;

//first find out min element;

var arr = [2, 4, 7, 1, 9, 7, 5, 6];
var smaller = arr[0];

for (var i = 0; i < arr.length; i++) {
        if(arr[i] < smaller) {
            smaller = arr[i];
        }
  }
console.log(smaller);


var arr = [9, 2, 4, 7, 1, 9, 7, 5, 6];
arr = arr.sort();
console.log(arr[0]);

// find max number in the array;

var arr = [2, 4, 7, 1, 9, 7, 5, 6];
var largest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i];
    }
}console.log(largest);


// find min and max
var arr = [2, 4, 7, 1, 9, 7, 5, 6];
var smaller = arr[0];
var largest = arr[0];


for (var i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
        largest = arr[i];
    } if(arr[i] < smaller) {
        smaller = arr[i];
    }
}

console.log(smaller, largest);
