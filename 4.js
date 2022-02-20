function runProgram(input) {
    var input = input.trim().split("\n");
    var size = input[0];
    var line = 1;
    for(var i = 0; i < size; i++) {
        var [n, M] = input[line++].split(" ").map(Number);
        var arr = input[line++].split(" ").map(Number);
        console.log(abc(arr, M));
        
    }
   }

   function abc(arr, M) {
   var out = 0;
   for(var i = 0; i < arr.length; i++) {
    out = out + arr[i];
    }
    for(var i = 0; i <= 10; i++) {
        var a = M*i;
    if(a > out) {
     var b = a-M;
     break;
    }
    }
    return (out-b);
}
    


   if (process.env.USERNAME === "admin") {
       runProgram('1\n7 3\n1 2 3 4 5 6 7');
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
   
   
   
   
