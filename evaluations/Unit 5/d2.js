function runProgram(input) {
    var input = input.trim().split("\n");
    var t = input[0];
    var n = input[1];

function f(n) {
    var dp = [];
    dp[0] = 0;
     dp[1] = 1;
    dp[2] = 1;
    dp[3] = dp[0] + dp[1] +dp[2];
    for(var i = 4; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2] +  dp[i - 3];
  return dp[n];
}
console.log(f(n));

}
if (process.env.USERNAME === "admin") {
    runProgram('1\n4');
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

//T0= 0, T1= 1, T2= 1, and Tn+3= Tn+ Tn+1+ Tn+2 for n >= 0.

var n = 4;

function f(n) {
    var dp = [];
    dp[0] = 0;
     dp[1] = 1;
    dp[2] = 1;
    dp[3] = dp[0] + dp[1] +dp[2];
    for(var i = 3; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2] +  dp[i - 3];
  return dp[n];
}

console.log(f(n));


//


var abc = function(a, b) {
    var len = a.length;
    var t = 0;
    var t1 = 0;
    var s = 0;
    for (var i = 0; i < len; i++) {
      t += a[i] - b[i];
      if (t < 0) {
        s = i + 1;
        t1 += t;
        t = 0;
      }
    }
    return t + t1 >= 0 ? s : -1;
  };




  function runProgram(input) {
    var input = input.trim().split("\n");
    var t = +input[0];
    for (var i = 0; i < n; i++) {
    var arr1 = input[line++].split(" ").map(Number);
    var arr2 = input[line++].split(" ").map(Number);

    }

}
if (process.env.USERNAME === "admin") {
    runProgram('1\n4');
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

function nth(tn,dp){
    if(n in dp){
        return dp[tn]
    }
    if(n===0){
        return 0;
    }
    if(n===1 || n ===2){
        return 1;
    }
    dp[tn] = nth(n-1,dp)+nth(n-2,dp)+nth(n-3,dp)
    return dp[n]
    }
    
    function runProgram(input) {
    input=input.split("\n")
    var N = +input[0]
    var line = 1
    for(var i = 0;i<N;i++){
        var n = +input[line++]
        var dp = {}
       console.log(nth(tn,dp))
    }
    
    
    
      }
      if (process.env.USER === "admin") {
        runProgram(``);
      } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
          read += input;
        });
        process.stdin.on("end", function () {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
        });
        process.on("SIGINT", function () {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
        });
    }
      