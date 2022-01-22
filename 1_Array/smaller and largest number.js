// still working;

var arr = [1,2,3,4,5,6];

var smallest = 0;
var largest = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
         largest = largest + arr[j]+ " ";
        } else if(arr[i] < arr[j]) {
            smallest= smallest+ arr[j] + " ";
        }
    }console.log(largest);
    console.log(smallest);

}


// correct

var scores = [70, 20, 10, 50, 64, 46, 456];
var lowest = scores[0];
var higest = scores[0];

for (i = 0; i < scores.length; i++) {
    if (scores[i] < lowest) {
        lowest = scores[i];
    }
    if (scores[i] > higest) {
        higest = scores[i];
    }
}

console.log(lowest)
console.log(higest)

