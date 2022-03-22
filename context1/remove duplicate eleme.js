function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
    var n = input[line++];
    var arr = input[line++].split(" ").map(Number);
    console.log(removeduplicate(arr));
 
    }
}


function removeduplicate(arr) {
  var out = arr[0];
  for(var i = 1; i < arr.length; i++) {
      out = out ^ arr[i];
  }
  return out;
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

