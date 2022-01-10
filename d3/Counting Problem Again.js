function runProgram(input) {
    var str = input.trim();
    str = str.split("").sort();
    counting(str);

}

function counting(str) {
    let obj = {};
    for (var i = 0; i< str.length; i++) {
        if(obj[str[i]] == undefined) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    for (let a in obj) {
       console.log(a + " "+ obj[a]);
    }
}



if (process.env.USERNAME === "admin") {
    runProgram('masaischool');
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







var arr = "asklhjkhdfihfkk";
arr = arr.split("").sort();

console.log(arr.join(" "));