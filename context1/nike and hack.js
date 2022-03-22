function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
    var n = input[line++];
    hackmoney(n);
    }
}

function NickHack(n) {
    if (n == 1)
        return true;
    if (n == 0)
        return false;
    if (n % 20 == 0)
        return NickHack(n / 20) || NickHack(n / 10);
    else if (n % 10 == 0)
        return NickHack(n / 10);
    return false;
}

function hackmoney(n) {
    var ans = NickHack(n)
    if (ans == true) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

if (process.env.USERNAME === "admin") {
    runProgram('');
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