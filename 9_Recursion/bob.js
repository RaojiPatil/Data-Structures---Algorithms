function runProgram(input) {
    var input = input.trim().split("\n");
      var a = +input[0];
      var n = input[1];
    
  
   function ff(n) {
      if (n < 0)
          return 0;
      if (n == 0)
          return 1
      return ff(n - 1) + ff(n - 2) + ff(n - 3);
  
   }
   console.log(ff(n));
  }
  
  if (process.env.USERNAME === "admin") {
      runProgram(`1\n4`);
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






  var n = 2;

  function ff(n) {
    if (n < 0)
        return 0;
    if (n == 0)
        return 1
    return ff(n - 1) + ff(n - 2) + ff(n - 3);

 }
 console.log(ff(n));



var arr1 = ["123", "146", "454", "542", "456"];
var arr2 = ["100", "328", "248", "709", "200"];

var count = 0;
 

for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if(arr2[i] > arr1[j]) {
            count++;
        }
    }
}console.log(count); 



