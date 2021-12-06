function smallernumber(arr) {
    out = "";

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                out = out + arr[j] + " ";
                break;
            }

        }
    }
    console.log(out);
}




function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]
    var line = 1;
    var arr = input[line++].split(" ").map(Number);

    smallernumber(arr);

}

if (process.env.USERNAME === "Ash") {
    runProgram('10\n39 27 11 4 24 32 32 1');
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