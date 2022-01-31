

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