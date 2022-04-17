function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    var out = "";
    var arr = input[line++].split(" ").map(Number);
    var n = input[line++];
    for (var i = 0; i < n; i++) {
    var [a, b] = input[line++].split(" ").map(Number);
out = out + abc(arr, a, b)+ " ";
    } console.log(out);

}


function abc(arr, a, b) {
 var count = 0;

for(var i = 0; i < arr.length; i++){
if(a <= arr[i] && b >= arr[i]) {
    count++;
 }

} 
return count;
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