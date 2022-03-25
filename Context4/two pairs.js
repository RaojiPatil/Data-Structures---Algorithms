
function runProgram(input){
    input = input.trim().split("\n");
    var n = +input[0];
    var line = 1;
    for(var i = 0; i < n; i++) {
    var [l, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(twopairs(k, arr));
    }
    }
    
    function twopairs(k, arr) {
        var out = "";
        for(var i = 0; i < arr.length; i++) {
            for(var j = i+1; j < arr.length; j++) {
                if(arr[i] + arr[j] == k) {
                   return (i + " " + j);
                   
                }
            }
        }return ("-1" + " " + "-1");
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