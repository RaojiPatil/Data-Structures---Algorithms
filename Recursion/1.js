function runProgram(input) {
    input = input.trim().split("\n");
    let size = Number(input[0]);
    let vaccine = input[1].trim().split(" ").map(Number);
    let midichlories = input[2].trim().split(" ").map(Number);
    Cure(size, vaccine, midichlories)
   
  }
  function Cure(n, V, M) {
    var max = M[0];
    for(var i =1; i < n; i++){
      if(M[i] > max){
        max = M[i]
      }
    }
    
    let ans = false
    for(var j =0; j < n; j++){
      if(V[j] > max){
        ans = true   
      }else{
        ans = false
      }
    }
    
    if(ans){
      console.log("Yes")
    }else{
      console.log("No")
    }
  }
  
  if (process.env.USERNAME === "ADMIN") {
    runProgram(`5
    41 56 12 45 89
    10 10 10 10 10`);
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
      process.exit(0) ;
    });
  }