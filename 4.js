function runProgram(input) {
    var input = input.trim().split("\n");
    var size = input[0];
    var line = 1;
    for(var i = 0; i < size; i++) {
        var [n, k] = input[line++].split(" ").map(Number);
        var arr = input[line++].split(" ").map(Number);
        console.log(abc(a, b, c, d));
        
    }
   }




   if (process.env.USERNAME === "admin") {
       runProgram('2\n2 4\n2 2\n1 5\n1');
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
   
   
   
   

