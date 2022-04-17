function runProgram(input) {
    var input = input.trim().split(" ");
      var str = input[0];
     
     var count = 0;
for(var i = 0; i < str.length; i++) {
    for(var j = i; j < str.length; j++) {
        if(str[i] == str[j]) {
            count++;
        }
    }
}
console.log(count);
    
}
     
  
  if (process.env.USERNAME === "admin") {
      runProgram(``);
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


