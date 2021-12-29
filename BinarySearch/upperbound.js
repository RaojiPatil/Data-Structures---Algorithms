function upperBound(arr, k){
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

console.log(upperBound(arr,k));
}

if (process.env.USERNAME === "Ash") {
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