
function lowerBoundsearch(arr, k){

    var high = arr.length;
    var low = 0;
    var out = -1;
    
    while(low <= high) {
      mid = low + (Math.floor((high-low)/2))
        if(arr[mid] == k){
            out = mid;
            high = mid-1;
            
        }else if (arr[mid] <= k){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return out;
    }
    
     function runProgram(input) {
        var input = input.trim().split("\n");
        var [n, k] = input[0].split(" ").map(Number);
        var arr = input[1].split(" ").map(Number);
    console.log(lowerBoundsearch(arr, k));
    
      }
      
      if (process.env.USERNAME === "Ash") {
          runProgram(`5 3\n1 1 2 2 5`);
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