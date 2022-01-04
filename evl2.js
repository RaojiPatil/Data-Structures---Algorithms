
//

function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0];
    var line = 1
    var arr = input[line++].split(" ").map(Number);


   var out = "";

   for (var i = 0; i < arr.length; i++) {
       if(arr[i] == "-1") {
           out = out + "0" + " ";
       } else {
           out = out + arr[i] + " ";
       }
   }console.log(out);
 
}

  
  if (process.env.USERNAME === "Ash") {
      runProgram(`5\n1 2 1 -3 2`);
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



  
function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0];
    var line = 1
    for (var i = 0; i < n; i++) {
        var n1 = input[line++];
        var arr1 = input[line++].split(" ").map(Number);
        var arr2 = input[line++].split(" ").map(Number);
        console.log(arr1, arr2);
    }
}


function match1(arr1, arr2) {

    for(var i = 0; i < arr1.length; i++) {
        out1 = out1 + arr1[i];
    }
    for (var j = 0; j < arr2.length; j++) {
        out2 = out2 + arr2[j];
    }
}

if (out1 > out2) {
    console.log("try hard");
} else{
    console.log("asy win");
}

  
  if (process.env.USERNAME === "Ash") {
      runProgram(``);
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


	function maxGameByWinner(N)
	{
		let dp = new Array(N).fill(0);
		
		// for 0 games, 1 player is needed
		// for 1 game, 2 players are required
		dp[0] = 1;
		dp[1] = 2;
			
		// loop until i-th Fibonacci number is
		// less than or equal to N
		let i = 2;
		do {
			dp[i] = dp[i - 1] + dp[i - 2];
		} while (dp[i++] <= N);
		
		// result is (i - 2) because i will be
		// incremented one extra in while loop
		// and we want the last value which is
		// smaller than N, so one more decrement
		return (i - 2);
	}

// driver program
	
		let N = 10;
		console.log(maxGameByWinner(N));





        function runProgram(input) {
            
            var input = input.split("\n");
        
            var text = +input[0];
            var line = 1;
            for (var i = 1; i <= text; i++) {
                var size = input[line++];
                var arr = input[line++].split(" ").map(Number);
                var arr2 = input[line++].split(" ").map(Number); 
            }
            var ash = 0;
            var gay = 0;
        
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] > arr2[i]) {
                gay++;
            } else if (arr1[i] < arr2[i]) {
                ash++;
            } 
        }
        if (ash > gay) {
            console.log("Ash Finally Win");
        } else if (ash < gay) {
            console.log("Train Hard Again")
        }
        }
        
        if (process.env.USERNAME === "Ash") {
            runProgram('2\n3\n12 3 4\n5 4 6\n2\n1 5\n1 4');
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