function runProgram(input) {
    var input = input.trim().split(" ");
      var n = input[0].split(" ").map(Number);
      console.log(countway(n));
    
}
      function countway(n) {
          var DP = [];
          DP[0] = DP[1] = 1;
          DP[2] = 2;
          for(var i = 3; i <= n; i++)
              DP[i] = DP[i - 1] + DP[i - 2] +  DP[i - 3];
        return DP[n];
      }
  
  if (process.env.USERNAME === "admin") {
      runProgram(`4`);
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


