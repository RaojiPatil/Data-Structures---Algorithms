function allsum(A, N) {
  
    if (N === 0 || N === 1) {
        return 0;
    }
    
    return (allsum(A, N - 1) + Math.abs(A[N - 1]- A[N-2]));
}




function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var N = input[line++];
        var A = input[line++].split(" ").map(Number);
    console.log(allsum(A, N));
  }
}

if (process.env.USERNAME === "Ash") {
    runProgram('2\n3\n1 5 2\n5\n3 5 6 5 8');
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

