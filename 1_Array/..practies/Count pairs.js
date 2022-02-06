
var arr = [1,1,1,1];
var k = 2;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if(arr[i] + arr[j] == k) {
            count++;
        }
    }
}
console.log(count);


//

var arr = [1,1,1,1];
var k = 2;
var count = 0;

let i = 0, j = arr.length-1;

while (i <= j) {
    if(i + j == k) {
        count++;
        
    }
    i++;
    j--;
}
console.log(count);



var arr = [1,2,3,4,5,6,4,5,3];


var k = 6;
var out = "";
for (var i = 0; i < arr.length; i++) {
    if(arr[i] == k){
        out = arr[i];
    }
}
console.log(out);




