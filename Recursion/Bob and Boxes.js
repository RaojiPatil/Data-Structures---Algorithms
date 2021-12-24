function runProgram(input) {
    var input = input.trim().split("\n");
      var a = +input[0];
      var n = input[1];
    
  
   function ff(n) {
      if (n < 0)
          return 0;
      if (n == 0)
          return 1
      return ff(n - 1) + ff(n - 2) + ff(n - 5);
  
   }
   console.log(ff(n));
  }
  
  if (process.env.USERNAME === "Ash") {
      runProgram(`1\n5`);
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