function runProgram(input) {
    var input = input.trim().split("\n");
    var [n, x] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);


    function binarySearch(arr, x)
    {    
        let l = 0;
        let r = arr.length - 1;
        let mid;
        while (r >= l) {
             mid = l + Math.floor((r - l) / 2);
            if (arr[mid] == x)
                return mid;
     
            if (arr[mid] > x)
                r = mid - 1;
                
            else 
                l = mid + 1;
        }
        return -1;
    }
    result = binarySearch(arr, x);
        
    (result == -1);
    console.log(result)


}
  
  if (process.env.USERNAME === "admin") {
      runProgram(`5 0\n2 -2 0 3 4`);
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