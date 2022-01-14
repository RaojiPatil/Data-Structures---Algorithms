function runProgram(input) {
    var input = input.trim().split(" ");
      var n = input[0].split(" ").map(Number);
      console.log(f(n));
    
}
function  f(n) {
    let dp = new Array; 

    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
  if (process.env.USERNAME === "admin") {
      runProgram(`5`);
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


//


const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2)
    return 1;
    memo[n] = fib(n -1, memo) + fib(n -2, memo); 
    return memo[n];
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(81));
