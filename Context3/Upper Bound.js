var arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
var k = 3;
var out = "";

for(var i = 0; i < arr.length; i++) {
    if(arr[i] > k) {
        out = i;
        break;
    }
}
console.log(out);


// 2 Binary search


function upperbound(arr, k){
    var low = 1;
    var high = arr.length;
    var out = -1;
    while (low <= high) {
        mid = low +(Math.floor((high-low)/2))
        if (arr[mid]<= k){
            low = mid + 1;
        } else{
            out = mid
            high = mid - 1;
        }
    }
     return out 
}

function runProgram(input){
input = input.trim().split("\n");
var [n,k] = input[0].trim().split(" ").map(Number);
var arr = input[1].trim().split(" ").map(Number);

console.log(upperbound(arr,k));
}

if (process.env.USERNAME === "admin") {
    runProgram();
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}