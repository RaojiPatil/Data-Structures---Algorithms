function runProgram(input) {
    var input = input.trim().split("\n");

    var [n, q] = input[0].split(" ").map(Number);
    var line = 1;
    var arr = input[line++].split(" ").map(Number);
    for (var i = 0; i < q; i++) {
        var [left, right, element] = input[line++].split(" ").map(Number);
    console.log(findFrequency(arr, left, right, element));
    }    
}


function findFrequency(arr,left,right,element)
{
    let count = 0;
    for (let i = left - 1; i < right; ++i)
        if (arr[i] == element)
            ++count;
    return count;
}



if (process.env.USERNAME === "admin") {
    runProgram('6 2\n1 5 3 2 3 2\n3 6 2\n4 4 2');
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









var arr = [1,2,3,4,5,6,2,3,1];

var out = "";

arr.sort();

for (var i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i+1]) {
        out = out + arr[i] + " ";
    }
}
console.log(out);







var n = 7;

function fib(n) {
    if(n == 0 || n == 1) 
        return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(n));



