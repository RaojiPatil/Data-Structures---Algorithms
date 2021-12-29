var arr = [0,0,0,1,1];
var out = "";

for (var i = 0; i < arr.length; i++) {
    if(arr[i] == "1") {
        out = i;
        break;
    }

}
if(out == "0") {
    console.log("-1");
}else{
    console.log(out);
}



//

function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0];
    var line = 1;
    for (var i = 0; i < n; i++) {
        var n1 = input[line++];
        var arr = input[line++].split(" ").map(Number);
        twice(arr);
    }
}
    var out = "";
function twice(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                out = out + "";
            }else{
                out = out + arr[i] + " ";
            }
        }
    }console.log(out);

}

  
  if (process.env.USERNAME === "Ash") {
      runProgram(`2\n1\n5\n5\n1 2 1 3 2`);
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


  var arr = [1,2,3,3,1,2];

  var out = "";
  for (var i = 0; i < arr.length; i++) {
      for (var j = i+1; j < arr.length; j++) {
          if(arr[j] != arr[i]) {
              out = arr[i];
          }
      }
     
  }console.log(out);


//


var ar = [1,2,,3,1,2];
let n = ar.length;
function findSingle(ar, ar_size){

		let res = ar[0];
		for (let i = 1; i < ar_size; i++)
			res = res ^ ar[i];

		return res;
	}
console.log(findSingle(ar, n));



var arr =  [1,2,3,4,5];
var a = 1;
var x = 5;

for(var i = 0; i < arr.length; i++) {
    if(a == "1") {
        x >= arr[i]
    }
}